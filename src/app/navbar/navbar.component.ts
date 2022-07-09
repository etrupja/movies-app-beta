import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  movieTitle: string = '';
  loggedInUser: any;

  constructor(private router: Router, public auth: AuthService) { }

  public searchMovie(searchTerm: string) {
    console.log(searchTerm);
    this.router.navigate(['/search', searchTerm]);
 }

  ngOnInit(): void {
    if(this.auth.user$) {
      this.auth.user$.subscribe(user => {
        this.loggedInUser = user;
      });
    }
  }

}
