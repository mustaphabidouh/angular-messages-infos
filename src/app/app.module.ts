import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NotificationComponent } from './components/notification/notification.component';
import { NotificationListComponent } from './components/notification-list/notification-list.component';
import { MessageBusService } from './services/message-bus.service';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule],
  declarations: [
    AppComponent,
    NotificationComponent,
    NotificationListComponent,
  ],
  bootstrap: [AppComponent],
  providers: [MessageBusService],
})
export class AppModule {}
