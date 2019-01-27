import { Injectable } from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";

import { Observable } from "rxjs";

import { Product } from "./product";
import { ProductService } from "./product.service";

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<Product> {

  constructor(private productService: ProductService) { }

  // Love auto complete from Intellij!
  // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> | Promise<Product> | Product {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> {
    const id = route.paramMap.get('id');
    if (isNaN(+id)) {
      const message = `Product id was not a number: ${id}`;
      console.error(message);
      return;
    }

    // Notice that we don't subscribe here, the resolver manages the subscription for us and does not continue
    // until the data is returned and the subscription is complete.
    return this.productService.getProduct(+id);
  }
}
