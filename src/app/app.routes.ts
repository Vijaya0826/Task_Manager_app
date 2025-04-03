import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignupComponent } from './signup/signup.component';
import { TaskmanagerComponent } from './taskmanager/taskmanager.component';

export const routes: Routes = [
    {
        path:'',
        component:LandingPageComponent
    },
    {
        path:'login',
        component: LoginComponent
    },
    {
        path:'signup',
        component:SignupComponent
    },
    {
        path:'taskmanager',
        component:TaskmanagerComponent
    }
];
