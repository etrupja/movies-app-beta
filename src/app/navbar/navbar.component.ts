import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  movieTitle: string = '';

  constructor(private router: Router) { }

  public searchMovie(searchTerm: string) {
    console.log(searchTerm);
    this.router.navigate(['/search', searchTerm]);
 }


  ngOnInit(): void {
  }

}
