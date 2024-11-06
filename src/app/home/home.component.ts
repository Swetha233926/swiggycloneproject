import { Component, AfterViewInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SignComponent } from '../sign/sign.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, HttpClientModule, CommonModule,SignComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  isSignInVisible: boolean = false; // Control visibility of sign-in component

  ngAfterViewInit(): void {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const container = document.getElementById('category-container');
    const container1 = document.getElementById('category-container1');

    if (prevBtn && nextBtn && container && container1) {
      prevBtn.addEventListener('click', () => {
        container.scrollBy({ left: -360, behavior: 'smooth' });
      });

      nextBtn.addEventListener('click', () => {
        container.scrollBy({ left: 360, behavior: 'smooth' });
      });
    }
  }

  // Toggle the visibility of the sign-in component
  toggleSignIn() {
    this.isSignInVisible = !this.isSignInVisible;
  }
}
