import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppFooterComponent } from './components/main/app-footer/app-footer.component';
import { AppHeaderComponent } from './components/main/app-header/app-header.component';
import { SharedsModule } from './shareds';

@NgModule({
  declarations: [
    AppComponent,
    AppFooterComponent,
    AppHeaderComponent
  ],
  imports: [
    BrowserModule,
    SharedsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
