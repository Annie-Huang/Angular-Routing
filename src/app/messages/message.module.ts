import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { MessageComponent } from './message.component';
import {RouterModule} from "@angular/router";

// http://localhost:4200/welcome(popup:messages)
// Login to the page will show login info in the messages component
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'messages',
        component: MessageComponent,
        outlet: 'popup' // secondary router needs to have a name
      }
    ])
  ],
  declarations: [
    MessageComponent
  ]
})
export class MessageModule { }
