// favourites.service.ts

import { Injectable } from '@angular/core';

interface FavouriteItem {
  name: string;
  price: string;
  image: string;
  restaurant: string;
  location: string;
  quantity: number;  // Include quantity here
}

@Injectable({
  providedIn: 'root',
})
export class FavouritesService {
  private favourites: FavouriteItem[] = [];

  constructor() {
    const storedFavourites = localStorage.getItem('favourites');
    if (storedFavourites) {
      this.favourites = JSON.parse(storedFavourites);
    }
  }

  // Add item to the favourites list, ensuring quantity is initialized to 0
  addToFavourites(item: FavouriteItem): void {
    const existingItem = this.favourites.find(fav => fav.name === item.name);
    if (!existingItem) {
      item.quantity = 0;  // Set quantity to 0 by default
      this.favourites.push(item);
      localStorage.setItem('favourites', JSON.stringify(this.favourites));
    }
  }

  // Remove item from the favourites list
  removeFromFavourites(item: FavouriteItem): void {
    this.favourites = this.favourites.filter(fav => fav.name !== item.name);
    localStorage.setItem('favourites', JSON.stringify(this.favourites));
  }

  // Get all the favourite items
  getFavourites(): FavouriteItem[] {
    return this.favourites;
  }

  // Check if an item is in the favourites list
  isFavorite(item: FavouriteItem): boolean {
    return this.favourites.some(fav => fav.name === item.name);
  }
}
