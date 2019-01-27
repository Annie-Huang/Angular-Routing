import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";

import { Product } from "./product";

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<Product> {

}
