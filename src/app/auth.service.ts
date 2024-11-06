import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://6729de386d5fa4901b6ebc8a.mockapi.io/users'; // Update with your MockAPI URL

  constructor(private http: HttpClient) {}

  // Check if the user already exists (GET)
  createAccount(user: any): Observable<any> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(users => users.filter(u => u.email === user.email || u.phone === user.phone))
    );
  }

  // Register new user (POST)
  registerAccount(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  // Login with phone number (GET)
  login(phone: string): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}?phone=${phone}`);
  }
}
