import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);  // Start with an empty array
  cart$: Observable<any[]> = this.cartSubject.asObservable();  // Observable to subscribe to

  // Method to add items to the cart
  addToCart(item: any): void {
    const currentCart = this.cartSubject.getValue();  // Get current cart
    this.cartSubject.next([...currentCart, item]);  // Update cart with new item
    console.log('Updated cart:', currentCart);  // Log the updated cart
  }

  // Method to remove items from the cart
  removeFromCart(item: any): void {
    const currentCart = this.cartSubject.getValue();  // Get current cart
    const updatedCart = currentCart.filter(i => i.id !== item.id);  // Filter out the item
    this.cartSubject.next(updatedCart);  // Update cart
  }

  // Method to clear the cart
  clearCart(): void {
    this.cartSubject.next([]);  // Clear cart
  }
}
