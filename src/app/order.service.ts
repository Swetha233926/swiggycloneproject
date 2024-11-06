import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'https://mockapi.example.com/orders';  // Replace with your MockAPI URL

  constructor(private http: HttpClient) {}

  // Get orders associated with a user (based on phone number)
  getOrders(phone: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?phone=${phone}`);
  }

  // Save order for the logged-in user
  saveOrder(phone: string, order: any): Observable<any> {
    return this.http.post(this.apiUrl, { phone, ...order });
  }
}
