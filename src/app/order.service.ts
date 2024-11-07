import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl = 'https://2ef8cf9e-f09a-4f93-bab9-34fc75970ff6.mock.pstmn.io/orders';  // Your Postman URL

  constructor(private http: HttpClient) {}

  // Place an order
  placeOrder(order: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, order);
  }
}
