import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent {
  name: string = '';
  email: string = '';
  phone: string = '';
  errorMessage: string = '';
  successMessage: string = '';
  isLoginMode: boolean = true; // Toggle between login and sign-up

  private apiUrl = 'https://6729de386d5fa4901b6ebc8a.mockapi.io/users'; // Mock API URL

  constructor(private http: HttpClient, private authService: AuthService) {}

  // Getter for isLoggedIn that checks localStorage directly
  get isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }

  // Create Account (Sign-up)
  onSignUp() {
    if (this.name && this.email && this.phone) {
      this.authService.createAccount({ email: this.email, phone: this.phone }).subscribe(
        (users) => {
          if (users.length > 0) {
            this.errorMessage = 'An account with this email or phone number already exists.';
            this.successMessage = '';
          } else {
            const userData = { name: this.name, email: this.email, phone: this.phone };
            this.authService.registerAccount(userData).subscribe(
              () => {
                this.successMessage = 'Account created successfully!';
                this.errorMessage = '';
                this.isLoginMode = true; // Switch to login mode
              },
              (error) => {
                this.errorMessage = 'An error occurred while creating the account.';
                this.successMessage = '';
                console.error('Error creating account:', error);
              }
            );
          }
        },
        (error) => {
          this.errorMessage = 'An error occurred while checking the user data.';
          this.successMessage = '';
          console.error('Error checking for existing user:', error);
        }
      );
    } else {
      this.errorMessage = 'Please fill in all fields.';
    }
  }

  // Login user
  onLogin() {
    if (this.email && this.phone) {
      this.authService.login(this.phone).subscribe(
        (users) => {
          if (users.length > 0) {
            localStorage.setItem('user', JSON.stringify(users[0]));
            this.errorMessage = '';
            this.successMessage = 'You are logged in!';
          } else {
            this.errorMessage = 'No user found with these credentials.';
            this.successMessage = '';
          }
        },
        (error) => {
          this.errorMessage = 'An error occurred. Please try again later.';
          this.successMessage = '';
          console.error('Login error:', error);
        }
      );
    } else {
      this.errorMessage = 'Please enter both email and phone.';
    }
  }

  // Logout
  onLogout() {
    localStorage.removeItem('user'); // Remove user data from localStorage
    this.successMessage = '';
    this.errorMessage = 'You have logged out. Please log in again to place an order.';
  }
}
