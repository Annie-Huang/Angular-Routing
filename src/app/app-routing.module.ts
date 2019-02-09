import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule} from "@angular/router";
import {WelcomeComponent} from "./home/welcome.component";
import {PageNotFoundComponent} from "./page-not-found.component";
import {AuthGuard} from "./user/auth.guard";
import {SelectiveStrategy} from "./selective-strategy.service";

// RouterModule.forRoot([..], { enableTracing: true }),
// And watch route event in chrome developer tool.
// { preloadingStrategy: PreloadAllModules }
@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      {
        path: 'products',
        // canActivate: [AuthGuard],
        // canLoad: [AuthGuard],
        canActivate: [AuthGuard],
        data: { preload: true },
        loadChildren: './products/product.module#ProductModule'
      },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent }
    ], { preloadingStrategy: SelectiveStrategy }),  // canLoad guard blocks preloading
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
