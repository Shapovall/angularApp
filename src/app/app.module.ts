import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LoginComponent } from './custom-components/login/login.component';
import { RegisterComponent } from './custom-components/register/register.component';
import { SpaModule } from 'SPA/spa.module';
import { HideAndShowComponent } from './custom-components/hide-and-show/hide-and-show.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HideAndShowComponent,
  ],
  imports: [
    SpaModule,
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
