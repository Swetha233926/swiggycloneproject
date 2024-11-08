import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignComponent } from './sign/sign.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { CartComponent } from './cart/cart.component';
import { OffersComponent } from './offers/offers.component';
import { FavouritesComponent } from './favourites/favourites.component';

export const routes: Routes = [
    
    {path:"",component:HomeComponent},
    {path:"signin",component:SignComponent},
    {path:'restaurant',component:RestaurantComponent},
    {path:'checkout',component:CartComponent},
    {path:'offers',component:OffersComponent},
    {path:'favourites',component:FavouritesComponent}
    
];