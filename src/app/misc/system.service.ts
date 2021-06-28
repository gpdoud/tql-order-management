import { Injectable } from '@angular/core';
import { Salesperson } from '../salesperson/sper.class';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  loggedInUser: Salesperson | null = null;

  isLoggedIn(): boolean {
    return this.loggedInUser != null;
  }

  constructor() { }
}
