import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { CartService } from '../cart.service';
import { HttpClient } from '@angular/common/http'; // Import HttpClient to make HTTP requests

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
  orderMessage: string = ''; // Variable to store the order placement message

  constructor(
    private cartService: CartService,
    private cdRef: ChangeDetectorRef,
    private http: HttpClient  // Inject HttpClient to make HTTP requests
  ) {}

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

  // Place order method
  placeOrder() {
    if (this.isLoggedIn) {
      // Prepare the order data to be sent to the MockAPI
      const orderData = {
        userName: this.userName,
        orderDetails: this.cartItems,
        message: 'Order placed successfully',
        status: 'success'
      };

      // Make a POST request to MockAPI to place the order
      this.http.post('https://6729de386d5fa4901b6ebc8a.mockapi.io/orders', orderData)
        .subscribe(
          response => {
            this.orderMessage = 'Order placed successfully'; // Show success message
            console.log(response); // Log the response from the API

            // Trigger change detection after setting the message
            this.cdRef.detectChanges();

            // Hide the success message and clear the cart after 5 seconds
            setTimeout(() => {
              this.orderMessage = ''; // Clear the message
              this.clearCart(); // Now, clear the cart
            }, 5000);
          },
          error => {
            this.orderMessage = 'Failed to place the order'; // Show error message
            console.error('Error placing order: ', error); // Log the error

            // Trigger change detection to update UI
            this.cdRef.detectChanges();
          }
        );
    } else {
      this.orderMessage = 'Please sign in to place the order.'; // Prompt user to log in if not logged in
      this.cdRef.detectChanges(); // Trigger change detection
    }
  }

  // Logout method
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
