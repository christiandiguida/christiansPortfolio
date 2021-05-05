import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NewAccountComponent } from './new-account/new-account.component';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [AppComponent, NewAccountComponent, AccountComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
