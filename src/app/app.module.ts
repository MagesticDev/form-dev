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
import { ActivityListComponent } from './components/pages/activity-list/activity-list.component';
import { MainLayoutComponent } from './components/pages/main-layout/main-layout.component';
import { ModuleCardComponent } from './components/module-card/module-card.component';
import { ModuleDetailsComponent } from './components/pages/module-details/module-details.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AppFooterComponent,
    AppHeaderComponent,
    SidenavComponent,
    ActivityListComponent,
    MainLayoutComponent,
    ModuleCardComponent,
    ModuleDetailsComponent,
  ],
  imports: [
    AppRoutingModule,
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
