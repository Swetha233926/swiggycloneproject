import { Injectable } from '@angular/core';

interface CartItem {
  name: string;
  price: string;
  image: string;
  restaurant: string;
  location: string;
  quantity: number; // Added quantity to manage item count
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartKey = 'cart';

  // Get all cart items from localStorage
  getCartItems(): CartItem[] {
    const cart = localStorage.getItem(this.cartKey);
    return cart ? JSON.parse(cart) : [];
  }

  // Add an item to the cart and update localStorage
  addItem(item: CartItem): void {
    const cartItems = this.getCartItems();
    const existingItem = cartItems.find(cartItem => cartItem.name === item.name);
    if (existingItem) {
      existingItem.quantity++; // If item exists, just increment the quantity
    } else {
      item.quantity = 1; // If new item, initialize with quantity 1
      cartItems.push(item);
    }
    localStorage.setItem(this.cartKey, JSON.stringify(cartItems));
  }

  // Update cart items in localStorage
  updateCartItems(cartItems: CartItem[]): void {
    localStorage.setItem(this.cartKey, JSON.stringify(cartItems));
  }

  // Clear all items from the cart
  clearCart(): void {
    localStorage.removeItem(this.cartKey);
  }
}
