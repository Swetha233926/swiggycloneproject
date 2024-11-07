import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SignComponent } from '../sign/sign.component';
import { ScrollNavigationComponent } from '../scroll-navigation/scroll-navigation.component';
import { OffersComponent } from '../offers/offers.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, HttpClientModule, CommonModule, SignComponent, ScrollNavigationComponent,OffersComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {



}
