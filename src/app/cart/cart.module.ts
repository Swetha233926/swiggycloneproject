// cart.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { NavbarComponent } from '../navbar/navbar.component';  // Import the NavbarComponent here

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule],  // CommonModule or any other modules
  exports: [CartComponent]  // Export if needed elsewhere
})
export class CartModule { }
