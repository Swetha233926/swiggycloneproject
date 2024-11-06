import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sign',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent {
  phoneNumber: string = '';
  name: string = '';

  constructor(private http: HttpClient, private userService: UserService) {}

  loginUser() {
    if (this.phoneNumber && this.name) {
      this.http.post('https://6729de386d5fa4901b6ebc8a.mockapi.io/numbers', { phoneNumber: this.phoneNumber, name: this.name })
        .subscribe({
          next: (response) => {
            console.log('User logged in:', response);
            alert('Login successful');
            this.userService.setUserName(this.name); // Update the username in the service
          },
          error: (error) => {
            console.error('Login error:', error);
            if (error.error) {
              console.error('Error details:', error.error);
            }
          }
        });
    } else {
      console.warn('Both name and phone number are required');
    }
  }
}
