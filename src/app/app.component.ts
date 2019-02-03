import { Component } from '@angular/core';
import {Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError} from '@angular/router';

import { AuthService } from './user/auth.service';
import { slideInAnimation } from "./app.animation";
import { MessageService } from "./messages/message.service";

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})
export class AppComponent {
  pageTitle = 'Acme Product Management';
  loading = true;

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  get isMessageDisplayed(): boolean {
    return this.messageService.isDisplayed;
  }

  get userName(): string {
    if (this.authService.currentUser) {
      return this.authService.currentUser.userName;
    }
    return '';
  }

  constructor(private authService: AuthService,
              private router: Router,
              private messageService: MessageService) {
    router.events.subscribe((routerEvent: Event) => {
      this.checkRouterEvent(routerEvent);
    });
  }

  checkRouterEvent(routerEvent: Event): void {
    if (routerEvent instanceof NavigationStart) {
      this.loading = true;
    }

    if (routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError) {
      this.loading = false;
    }
  }

  displayMessages(): void {
    this.router.navigate([{ outlets: { popup: ['messages'] } }]);
    this.messageService.isDisplayed = true;
  }

  hideMessages(): void {
    this.messageService.isDisplayed = false;
  }

  logOut(): void {
    this.authService.logout();
    console.log('Log out');

    // Use the navigateByUrl here instead of the navigate method to ensure that every existing parameter
    // or secondary route is removed when the user logs out.
    this.router.navigateByUrl('/welcome');
  }
}
