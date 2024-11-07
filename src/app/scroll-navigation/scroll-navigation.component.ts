import { Component, Input, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-scroll-navigation',
  templateUrl: './scroll-navigation.component.html',
  styleUrls: ['./scroll-navigation.component.scss'],
  standalone: true,
  imports: [],
})
export class ScrollNavigationComponent implements AfterViewInit {
  @Input() containerId!: string;  // The ID of the container to scroll

  private containerElement!: HTMLElement;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    
    this.containerElement = document.getElementById(this.containerId)!;
  }

  scrollLeft(): void {
    if (this.containerElement) {
      this.containerElement.scrollBy({ left: -360, behavior: 'smooth' });
    }
  }

  scrollRight(): void {
    if (this.containerElement) {
      this.containerElement.scrollBy({ left: 360, behavior: 'smooth' });
    }
  }
}
