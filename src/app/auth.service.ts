import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://6729de386d5fa4901b6ebc8a.mockapi.io/numbers'; // Replace with your mock API URL

  constructor(private http: HttpClient) {}

  login(phoneNumber: string): Observable<any> {
    const body = { phoneNumber };
    return this.http.post(this.apiUrl, body);
  }
}
