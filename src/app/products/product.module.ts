import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductResolver } from "./product-resolver.service";

import { SharedModule } from '../shared/shared.module';

// To associate a route resolver with a route, we add it to the route configuration that we define within an Angular module.
//   This ensures that the data for the route is retrieved using the resolver before the routed component is activated.
// When the product detail route is activated, this route configuration tells the router to use the resolver service to prefetch the product data.
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: 'products', component: ProductListComponent},
      {
        path: 'products/:id',
        component: ProductDetailComponent,
        resolve: {resolvedData: ProductResolver}
      },
      {
        path: 'products/:id/edit',
        component: ProductEditComponent,
        resolve: {resolvedData: ProductResolver}
      }
    ])
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent
  ]
})
export class ProductModule { }
