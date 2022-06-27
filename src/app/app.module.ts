import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { AppFooterComponent } from './components/main/app-footer/app-footer.component';
import { AppHeaderComponent } from './components/main/app-header/app-header.component';
import { SharedsModule } from './shareds';
import {AuthInterceptor} from "@/core/helpers/auth.interceptor";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    AppFooterComponent,
    AppHeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedsModule,
    AppRoutingModule
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
