import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service'; // Adjust the import path based on your project structure

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Add other tests as needed, e.g., testing specific methods in AuthService
});
