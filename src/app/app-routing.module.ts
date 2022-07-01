import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { ActivityListComponent } from './components/pages/activity-list/activity-list.component';
import { MainLayoutComponent } from './components/pages/main-layout/main-layout.component';

const routes: Routes =[
  {path: '', component: MainLayoutComponent, children: [
    {path: '', component: ActivityListComponent}
  ]}
];

@NgModule({
    imports: [
        RouterModule.forRoot([
            // { path: '', redirectTo: '/Home', pathMatch: 'full' },
            // { path: 'Home', loadChildren: () => import('./components/pages/home/app-home.module').then(m => m.HomeModule) },
            // { path: 'Contact', loadChildren: () => import('./components/pages/contact/app-contact.module').then(m => m.ContactModule) },
        ],
            { enableTracing: false }
        ),
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
