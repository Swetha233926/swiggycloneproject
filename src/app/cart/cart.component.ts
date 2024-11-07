import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { CartService } from '../cart.service';

interface CartItem {
  name: string;
  price: string;
  image: string;
  restaurant: string;
  location: string;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  imports: [NavbarComponent, CommonModule],
  styleUrls: ['./cart.component.scss'],
  standalone: true
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  isLoggedIn: boolean = false;
  userName: string = ''; 

  constructor(private cartService: CartService, private cdRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.loadCartItems();
    this.checkLoginStatus(); // Check login status on component init
  }

  loadCartItems() {
    this.cartItems = this.cartService.getCartItems();
  }

  checkLoginStatus() {
    const loggedInStatus = localStorage.getItem('user'); // Check if user is logged in by checking the 'user' item in localStorage
    this.isLoggedIn = !!loggedInStatus; // Set login status based on user data in localStorage
    
    const user = loggedInStatus ? JSON.parse(loggedInStatus) : null; // If logged in, retrieve user data
    this.userName = user ? user.name : ''; // Get user name if available
  }

  increaseQuantity(item: CartItem): void {
    item.quantity++;
    this.updateCart();
  }

  decreaseQuantity(item: CartItem): void {
    if (item.quantity > 1) {
      item.quantity--;
      this.updateCart();
    }
  }

  updateCart(): void {
    this.cartService.updateCartItems(this.cartItems);
  }

  clearCart() {
    this.cartService.clearCart();
    this.cartItems = [];
  }

  placeOrder() {
    if (this.isLoggedIn) {
      console.log('Placing the order...');
    } else {
      console.log('Please sign in to place the order.');
    }
  }

  onLogout() {
    // Step 1: Remove the user from localStorage
    localStorage.removeItem('user');
    
    // Step 2: Update the component state immediately
    this.isLoggedIn = false;
    this.userName = '';
    
    // Step 3: Trigger change detection manually to update the UI immediately
    this.cdRef.detectChanges();

    // Step 4: Optionally, log out the user for debugging
    console.log('Logged out');
  }
}
