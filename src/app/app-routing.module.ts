import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { ActivityListComponent } from './components/pages/activity-list/activity-list.component';
import { MainLayoutComponent } from './components/pages/main-layout/main-layout.component';
import { ModuleDetailsComponent } from './components/pages/module-details/module-details.component';

const routes: Routes =[
  {path: '', component: MainLayoutComponent, children: [
    {path: '', component: ActivityListComponent, pathMatch: 'full'},
    {path: '1', component: ModuleDetailsComponent}
  ]}
];

@NgModule({
    imports: [
        RouterModule.forRoot(
          routes,
          { enableTracing: false }
        ),
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
