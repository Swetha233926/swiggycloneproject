import { Component, OnInit, Output, EventEmitter ,Input} from '@angular/core';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  
  isMobileMenuOpen = false; // State to track mobile menu visibility

  isLoggedIn: boolean = false;
  userName: string = '';
  constructor(private userService: UserService) {}

  ngOnInit() {
    // Check if user data exists in local storage
    const userData = localStorage.getItem('user');
    if (userData) {
      const user = JSON.parse(userData);
      this.isLoggedIn = true;
      this.userName = user.name;
    }
  }

  // Logout function
  onLogout() {
    localStorage.removeItem('user');
    this.isLoggedIn = false;
    this.userName = '';
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen; // Toggle mobile menu visibility
  }
  onLogin() {
    // You can add your login logic here
    console.log('Login clicked');
  }

  @Input() inCartView: boolean = false;


}
