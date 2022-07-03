import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MOVIE_DETAILS } from 'src/assets/data/movie-details';
import { MOVIE_REVIEWS } from 'src/assets/data/movie-reviews';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  movieId: string = '';
  movieDetails = MOVIE_DETAILS;
  movieReviews = MOVIE_REVIEWS;

  constructor(private activeRoute: ActivatedRoute) {
    this.activeRoute.params.subscribe(params => {
      this.movieId = params['id'];
    });

    console.log('Details for id: ', this.movieId);
  }

  ngOnInit(): void {
    console.log('Details obj: ', this.movieDetails);
    console.log('Details obj [actorList]: ', this.movieDetails.actorList);
  }
}
