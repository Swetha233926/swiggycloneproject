import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { CartService } from '../cart.service';
import { HttpClient } from '@angular/common/http'; 

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
    private http: HttpClient  
  ) {}

  ngOnInit() {
    this.loadCartItems();
    this.checkLoginStatus(); 
  }

  loadCartItems() {
    this.cartItems = this.cartService.getCartItems();
  }

  checkLoginStatus() {
    const loggedInStatus = localStorage.getItem('user'); 
    this.isLoggedIn = !!loggedInStatus; 
    
    const user = loggedInStatus ? JSON.parse(loggedInStatus) : null; 
    this.userName = user ? user.name : ''; 
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
            this.orderMessage = 'Order placed successfully'; 
            console.log(response); 

            
            this.cdRef.detectChanges();

            
            setTimeout(() => {
              this.orderMessage = ''; 
              this.clearCart(); 
            }, 5000);
          },
          error => {
            this.orderMessage = 'Failed to place the order'; 
            console.error('Error placing order: ', error); 

         
            this.cdRef.detectChanges();
          }
        );
    } else {
      this.orderMessage = 'Please sign in to place the order.'; 
      this.cdRef.detectChanges(); 
    }
  }

  // Logout method
  onLogout() {
    
    localStorage.removeItem('user');
    
   
    this.isLoggedIn = false;
    this.userName = '';
    
    
    this.cdRef.detectChanges();

 
    console.log('Logged out');
  }
}
