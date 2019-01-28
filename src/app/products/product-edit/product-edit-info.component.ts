import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Product } from '../product';

@Component({
  templateUrl: './product-edit-info.component.html'
})
export class ProductEditInfoComponent implements OnInit {
  @ViewChild(NgForm) productForm: NgForm;

  errorMessage: string;
  product: Product;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.parent.data.subscribe(data => {
      // Do the following in case user switch from edit to add product while the form still have validation error.
      // E.g. if user product code field empty which is required.
      if (this.productForm) {
        this.productForm.reset();
      }

      this.product = data['resolvedData'].product;  // resolvedData is defined in product.module.ts.
    });
  }
}
