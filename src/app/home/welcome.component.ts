import { Component } from '@angular/core';

// A component only needs a selector if it will be used as a nested component.
// Since we are now routing to the Welcome component instead of using it as a nested component,
// we no longer need the selector.

//   selector: 'pm-home',
@Component({
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
  public pageTitle = 'Welcome';
}
