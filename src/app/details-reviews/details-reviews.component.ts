import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MOVIE_DETAILS } from 'src/assets/data/movie-details';
import { MOVIE_REVIEWS } from 'src/assets/data/movie-reviews';

@Component({
  selector: 'app-details-reviews',
  templateUrl: './details-reviews.component.html',
  styleUrls: ['./details-reviews.component.css']
})
export class DetailsReviewsComponent implements OnInit {

  movieId: string = '';
  movieDetails = MOVIE_DETAILS;
  movieReviews = MOVIE_REVIEWS;

  constructor(private activeRoute: ActivatedRoute) {
    this.activeRoute.params.subscribe(params => {
      this.movieId = params['id'];
    });
  }

  ngOnInit(): void {
  }
}
