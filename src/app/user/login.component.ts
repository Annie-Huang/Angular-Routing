import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {
  errorMessage: string;
  pageTitle = 'Log In';

  constructor(private authService: AuthService, private router: Router) { }

  login(loginForm: NgForm) {
    if (loginForm && loginForm.valid) {
      const userName = loginForm.form.value.userName;
      const password = loginForm.form.value.password;
      this.authService.login(userName, password);

      // // Navigate to the Product List page after log in.
      // this.router.navigate(['/products']);

      // First, we check whether there is a redirect URL.
      // There won't be if the user clicks the login menu option before accessing any product routes.
      // If there is a redirect URL, we use the navigateByUrl method to navigate to that URL, otherwise we navigate to the Product List page.
      if (this.authService.redirectUrl) {
        this.router.navigateByUrl(this.authService.redirectUrl);
      } else {
        this.router.navigate(['/products']);
      }

      // // Some parts of the current URL, such as secondary route information, is retained when navigating.
      // //   If we don't want this behavior, there is another navigate method we can use, navigateByUrl.
      // this.router.navigateByUrl('/products');  // method to clear the secondary route as well

    } else {
      this.errorMessage = 'Please enter a user name and password.';
    }
  }
}
