import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userNameSource = new BehaviorSubject<string | null>(null);
  userName$ = this.userNameSource.asObservable();

  setUserName(name: string) {
    console.log('Setting username:', name); // Debugging log
    this.userNameSource.next(name); // Update the username
  }
}
