import { Injectable } from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";

import { Observable, of } from "rxjs";

import { ProductResolved } from "./product";
import { ProductService } from "./product.service";
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<ProductResolved> {

  constructor(private productService: ProductService) { }

  // Love auto complete from Intellij!
  // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> | Promise<Product> | Product {
  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<ProductResolved> {
    const id = route.paramMap.get('id');
    if (isNaN(+id)) {
      const message = `Product id was not a number: ${id}`;
      console.error(message);
      return of({product: null, error: message});
    }

/*    // Notice that we don't subscribe here, the resolver manages the subscription for us and does not continue
    // until the data is returned and the subscription is complete.
    return this.productService.getProduct(+id);*/

    return this.productService.getProduct(+id)
      .pipe(
        map(product => ({product: product})),   // Error is optional so don't need to define it here.
        catchError(error => {
          const message = `Retrieval error: ${error}`;
          console.error(message);
          return of({product: null, error: message})
        })
      );
  }
}
