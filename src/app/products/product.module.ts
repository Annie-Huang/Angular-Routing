import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductEditInfoComponent } from "./product-edit/product-edit-info.component";
import { ProductEditTagsComponent } from "./product-edit/product-edit-tags.component";

import { ProductResolver } from "./product-resolver.service";

import { SharedModule } from '../shared/shared.module';
import {AuthGuard} from "../user/auth.guard";
import {ProductEditGuard} from "./product-edit/product-edit.guard";

// To associate a route resolver with a route, we add it to the route configuration that we define within an Angular module.
//   This ensures that the data for the route is retrieved using the resolver before the routed component is activated.
// When the product detail route is activated, this route configuration tells the router to use the resolver service to prefetch the product data.

/*    RouterModule.forChild([
      {path: 'products', component: ProductListComponent},
      {
        path: 'products/:id',
        component: ProductDetailComponent,
        resolve: {resolvedData: ProductResolver}
      },
      {
        path: 'products/:id/edit',
        component: ProductEditComponent,
        resolve: {resolvedData: ProductResolver},
        children: [
          {
            path: '', redirectTo: 'info', pathMatch: 'full'
          },
          {
            path: 'info', component: ProductEditInfoComponent
          },
          {
            path: 'tags', component: ProductEditTagsComponent
          }
        ]
      }
    ])*/
// RouterModule.forChild([
//   {
//     path: 'products',  // Cannot have products in here. Otherwise it will become, e.g. /products/products:id
//     // canActivate: [AuthGuard], // Temperately comment this out for easy navigation.
//     // Lazy loading prerequisite of 2: 'Routes grouped under a single parent' is met:
//     children: [
//       {
//         path: '',
//         component: ProductListComponent
//       },
//       {
//         path: ':id',
//         component: ProductDetailComponent,
//         resolve: { resolvedData: ProductResolver }
//       },
//       {
//         path: ':id/edit',
//         component: ProductEditComponent,
//         canDeactivate: [ProductEditGuard],
//         resolve: { resolvedData: ProductResolver },
//         children: [
//           { path: '', redirectTo: 'info', pathMatch: 'full' },
//           { path: 'info', component: ProductEditInfoComponent },
//           { path: 'tags', component: ProductEditTagsComponent }
//         ]
//       }
//     ]
//   }
// ])
@NgModule({
  imports: [
    SharedModule,
      RouterModule.forChild([
        {
          path: '',
          component: ProductListComponent
        },
        {
          path: ':id',
          component: ProductDetailComponent,
          resolve: { resolvedData: ProductResolver }
        },
        {
          path: ':id/edit',
          component: ProductEditComponent,
          canDeactivate: [ProductEditGuard],
          resolve: { resolvedData: ProductResolver },
          children: [
            { path: '', redirectTo: 'info', pathMatch: 'full' },
            { path: 'info', component: ProductEditInfoComponent },
            { path: 'tags', component: ProductEditTagsComponent }
          ]
        }

      ])
  ],
  // Lazy loading prerequisite of 1: 'Use a feature module' is met:
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductEditInfoComponent,
    ProductEditTagsComponent
  ]
})
export class ProductModule { }
