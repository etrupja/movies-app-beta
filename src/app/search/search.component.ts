import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SEARCH_RESULT } from 'src/assets/data/search-result';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  movieTitle: string = '';
  searchResult: any[] = [];

  constructor(private activeRoute: ActivatedRoute, private router: Router) {
    this.activeRoute.params.subscribe(params => {
      this.movieTitle = params['title'];
    });
  }

  ngOnInit(): void {
    console.log('Search for: ', this.movieTitle);
    this.searchResult = SEARCH_RESULT;
  }

  showDetails(id: any){
    this.router.navigate(['/details', id]);
  }
}
