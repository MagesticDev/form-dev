import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import {InputTextModule} from 'primeng/inputtext';

import { AppComponent } from './app.component';
import { AppFooterComponent } from './components/main/app-footer/app-footer.component';
import { AppHeaderComponent } from './components/main/app-header/app-header.component';
import { SharedsModule } from './shareds';
import {AuthInterceptor} from "@/core/helpers/auth.interceptor";
import {AppRoutingModule} from "./app-routing.module";
import {LoginComponent} from "./components/pages/login/login.component";
import {ReactiveFormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {PasswordModule} from "primeng/password";
import {MessagesModule} from "primeng/messages";
import {MessageModule} from "primeng/message";

@NgModule({
  declarations: [
    AppComponent,
    AppFooterComponent,
    AppHeaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    InputTextModule,
    ButtonModule,
    RippleModule,

    SharedsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    PasswordModule,
    MessagesModule,
    MessageModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
