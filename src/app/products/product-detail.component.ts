import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {Product, ProductResolved} from './product';
// import { ProductService } from './product.service';
import {AuthService} from "../user/auth.service";

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{
  pageTitle = 'Product Detail';
  product: Product;
  errorMessage: string;

/*
  constructor(private productService: ProductService,
              private route: ActivatedRoute) { }
*/
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
/*    // Since the URL is a string, we add a plus sign at the front to cast it to a number.
    const id = +this.route.snapshot.paramMap.get('id');
    this.getProduct(id);*/

    const resolvedData: ProductResolved = this.route.snapshot.data['resolvedData'];
    this.errorMessage = resolvedData.error;
    this.onProductRetrieved(resolvedData.product);
    // Try http://localhost:4200/products/5?filterBy=&showImage=false for success scenario.
    // http://localhost:4200/products/25?filterBy=&showImage=false for fail scenario: there is no product 25
  }

  // getProduct(id: number) {
  //   this.productService.getProduct(id).subscribe(
  //     product => this.onProductRetrieved(product),
  //     error => this.errorMessage = <any>error);
  // }

  onProductRetrieved(product: Product): void {
    this.product = product;

    if (this.product) {
      this.pageTitle = `Product Detail: ${this.product.productName}`;
    } else {
      this.pageTitle = 'No product found';
    }
  }
}
