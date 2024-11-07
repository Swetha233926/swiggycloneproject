import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ScrollNavigationComponent } from '../scroll-navigation/scroll-navigation.component';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';


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

  constructor(private cartService: CartService) {} 

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


}
