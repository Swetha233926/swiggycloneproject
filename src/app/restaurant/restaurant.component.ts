import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ScrollNavigationComponent } from '../scroll-navigation/scroll-navigation.component';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';



@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [NavbarComponent, ScrollNavigationComponent, CommonModule],
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent {
  // Initially set the dropdown to be visible
  isDropdownVisible = true; 

  // Method to toggle the visibility of the dropdown
  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  isFlavourFunDropdownVisible: boolean = false; // For the "Flavour Fun Range" section

  // Toggle function for the "Flavour Fun Range" section
  toggleFlavourFunDropdown(): void {
    this.isFlavourFunDropdownVisible = !this.isFlavourFunDropdownVisible;
  }


}
