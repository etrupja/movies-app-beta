import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MOVIE_DETAILS } from 'src/assets/data/movie-details';
import { MOVIE_REVIEWS } from 'src/assets/data/movie-reviews';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-details-reviews',
  templateUrl: './details-reviews.component.html',
  styleUrls: ['./details-reviews.component.css']
})
export class DetailsReviewsComponent implements OnInit {

  movieId: string = '';
  movieReviews: any;

  constructor(private activeRoute: ActivatedRoute, private moviesService: MoviesService) {
    this.activeRoute.params.subscribe(params => {
      this.movieId = params['id'];
    });
  }

  ngOnInit(): void {
    this.moviesService.getMovieReviews(this.movieId).subscribe(data => {
      console.log('Movie reviews - ', data);
      this.movieReviews = data;
    });
  }
}
