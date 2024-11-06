import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  userName: string | null = null;
  isMobileMenuOpen = false; // State to track mobile menu visibility

  constructor(private userService: UserService) {}

  ngOnInit() {
    // Subscribe to userName$ to get the user’s name
    this.userService.userName$.subscribe(name => {
      console.log('Received username in navbar:', name);
      this.userName = name;
    });
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen; // Toggle mobile menu visibility
  }
}
