import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/pages/login/login.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: 'login', component: LoginComponent}
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
