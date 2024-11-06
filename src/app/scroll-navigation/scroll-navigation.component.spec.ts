import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollNavigationComponent } from './scroll-navigation.component';

describe('ScrollNavigationComponent', () => {
  let component: ScrollNavigationComponent;
  let fixture: ComponentFixture<ScrollNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollNavigationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScrollNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
