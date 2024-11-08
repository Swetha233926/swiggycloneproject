import { Component, OnInit } from '@angular/core';
import { FavouritesService } from '../favourites.service';
import { CommonModule } from '@angular/common';

interface FavouriteItem {
  name: string;
  price: string;
  image: string;
  restaurant: string;
  location: string;
  quantity: number;
}

@Component({
  selector: 'app-favourites',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {
  favourites: FavouriteItem[] = [];

  constructor(private favouritesService: FavouritesService) {}

  ngOnInit(): void {
    this.loadFavourites();
  }

  // Load favorites from the service
  loadFavourites() {
    this.favourites = this.favouritesService.getFavourites();
  }

  // Toggle item in favourites
  toggleFavourite(item: FavouriteItem) {
    if (this.isFavorite(item)) {
      this.removeFromFavourites(item);
    } else {
      this.addToFavourites(item);
    }
  }

  // Add item to favorites
  addToFavourites(item: FavouriteItem) {
    this.favouritesService.addToFavourites(item);
    this.loadFavourites();
  }

  // Remove item from favorites
  removeFromFavourites(item: FavouriteItem) {
    this.favouritesService.removeFromFavourites(item);
    this.loadFavourites();
  }

  // Check if an item is a favorite
  isFavorite(item: FavouriteItem): boolean {
    return this.favouritesService.isFavorite(item);
  }
}
