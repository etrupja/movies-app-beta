import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  movieTitle: string = '';
  loggedInUser: any;

  constructor(private _router: Router, public _auth: AuthService) {}

  public searchMovie(searchTerm: string) {
    this._router.navigate(['/search', searchTerm]);
  }

  ngOnInit(): void {
    if (this._auth.user$) {
      this._auth.user$.subscribe((user) => {
        this.loggedInUser = user;
      });
    }
  }

  logIn() {
    this._auth.loginWithPopup();
  }

  logOut() {
    this._auth.logout();
  }
}
