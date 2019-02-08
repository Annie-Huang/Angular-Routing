import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {WelcomeComponent} from "./home/welcome.component";
import {PageNotFoundComponent} from "./page-not-found.component";
import {AuthGuard} from "./user/auth.guard";

// RouterModule.forRoot([..], { enableTracing: true }),
// And watch route event in chrome developer tool.
@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      {
        path: 'products',
        // canActivate: [AuthGuard],
        canLoad: [AuthGuard],
        loadChildren: './products/product.module#ProductModule'
      },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent }
    ]),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
