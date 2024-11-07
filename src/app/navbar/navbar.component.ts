import { Component, OnInit, Output, EventEmitter ,Input} from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  
  isMobileMenuOpen = false; 

  isLoggedIn: boolean = false;
  userName: string = '';


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

  onLogin() {
    
    console.log('Login clicked');
  }

  @Input() inCartView: boolean = false;
  @Input() inoffersview: boolean = false;
  @Input() inhomeview: boolean = false;



}
