import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

  loggedInUser: any;

  constructor(private router: Router, public auth: AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    this.loggedInUser = localStorage.getItem('loggedInUser');
    console.log('loggedInUser: ', this.loggedInUser);

    if (this.loggedInUser === null) {
      console.log('not logged in');
      return false;
    }
    return true;
  }
}
