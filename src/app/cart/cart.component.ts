import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  imports:[NavbarComponent,CommonModule],
  styleUrls: ['./cart.component.scss'],
  standalone:true
})
export class CartComponent{
 

  // Method to add item (for example, calling this from a button click)
 
}
