import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SEARCH_RESULT } from 'src/assets/data/search-result';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  movieId: string = '';

  constructor(private activeRoute: ActivatedRoute) {
    this.activeRoute.params.subscribe(params => {
      this.movieId = params['id'];
    });
  }

  ngOnInit(): void {
    console.log('Search for id: ', this.movieId);
  }
}
