import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppFooterComponent } from './components/main/app-footer/app-footer.component';
import { AppHeaderComponent } from './components/main/app-header/app-header.component';
import { SharedsModule } from './shareds';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { SidenavComponent } from './components/main/sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    AppFooterComponent,
    AppHeaderComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    SharedsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
