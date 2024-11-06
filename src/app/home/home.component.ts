import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SignComponent } from '../sign/sign.component';
import { ScrollNavigationComponent } from '../scroll-navigation/scroll-navigation.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, HttpClientModule, CommonModule, SignComponent, ScrollNavigationComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

}
