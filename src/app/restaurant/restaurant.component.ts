// restaurant.component.ts

import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ScrollNavigationComponent } from '../scroll-navigation/scroll-navigation.component';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';
import { FavouritesService } from '../favourites.service';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [NavbarComponent, ScrollNavigationComponent, CommonModule],
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent {
  isDropdownVisible = true;
  isFlavourFunDropdownVisible = false;

  constructor(private cartService: CartService, private favouritesService: FavouritesService) {}

  // Method to toggle the visibility of the dropdown
  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  // Toggle function for the "Flavour Fun Range" section
  toggleFlavourFunDropdown(): void {
    this.isFlavourFunDropdownVisible = !this.isFlavourFunDropdownVisible;
  }

  // Add item to the cart
  addToCart(item: any) {
    this.cartService.addItem(item);
    alert(`${item.name} added to cart!`);
  }

  // Add item to favourites
  addToFavourites(item: any) {
    this.favouritesService.addToFavourites(item);
    alert(`${item.name} added to favourites!`);
    console.log("Added to favourites");
  }

  // Remove item from favourites
  removeFromFavourites(item: any) {
    this.favouritesService.removeFromFavourites(item);
    alert(`${item.name} removed from favourites!`);
    console.log("Removed from favourites");
  }

  // Check if item is already in favourites
  isItemInFavourites(item: any): boolean {
    const favourites = this.favouritesService.getFavourites();
    return favourites.some(fav => fav.name === item.name);
  }
}
