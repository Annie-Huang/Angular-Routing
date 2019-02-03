import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
// import { RouterModule } from '@angular/router';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductData } from './products/product-data';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';

/* Feature Modules */
import { ProductModule } from './products/product.module';
import { UserModule } from './user/user.module';
import { MessageModule } from './messages/message.module';

// A key point to keep in mind is that the order of the routes in this array matters.
//   The router uses a first match wins strategy when matching route paths.
//   This means that more specific paths should always be before less specific paths, such as the wildcard path.
// Redirects can be local or absolute. Local redirects replace a single URL segment with a different one, such as our examples here.
//   An absolute redirect replaces the entire URL.

// The delay of InMemoryWebApiModule.forRoot(ProductData, { delay: 1000 }), is to make sure the spinner will occur during clicking into a product or Edit button in the product list page.
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(ProductData, { delay: 1000 }),
    // RouterModule.forRoot([
    //   { path: 'welcome', component: WelcomeComponent },
    //   { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    //   { path: '**', component: PageNotFoundComponent }
    // ]),
    // // Now that our application routes are in an external module, the route paths are processed in the order they are specified here,
    // // so the wildcard path matches every path that is not the welcome or empty path, preventing navigation to any other path below it.
    // //   We need to reorder our imports array to ensure that our wildcard route is last in the list of route paths.
    // AppRoutingModule,
    ProductModule,
    UserModule,
    MessageModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    PageNotFoundComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
