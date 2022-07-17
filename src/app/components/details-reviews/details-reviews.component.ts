import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { MOVIE_DETAILS } from 'src/assets/data/movie-details';
import { MOVIE_REVIEWS } from 'src/assets/data/movie-reviews';

@Component({
  selector: 'app-details-reviews',
  templateUrl: './details-reviews.component.html',
  styleUrls: ['./details-reviews.component.css']
})
export class DetailsReviewsComponent implements OnInit {

  movieId: string = '';
  movieReviews: any;
  isLoaded: boolean = false;

  constructor(private activeRoute: ActivatedRoute, private moviesService: MoviesService) {
    this.activeRoute.params.subscribe(params => {
      this.movieId = params['id'];
    });
  }

  ngOnInit(): void {
    this.moviesService.getMovieReviews(this.movieId).subscribe(data => {
      this.movieReviews = data;
      this.isLoaded = true;
    });
  }
}
