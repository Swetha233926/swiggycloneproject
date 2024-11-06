import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignComponent } from './sign/sign.component';

export const routes: Routes = [
    
    {path:"",component:HomeComponent},
    {path:"signin",component:SignComponent}
    
];