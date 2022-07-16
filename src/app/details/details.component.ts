import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MOVIE_DETAILS } from 'src/assets/data/movie-details';
import { MOVIE_REVIEWS } from 'src/assets/data/movie-reviews';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  movieId: string = '';
  movieDetails: any;
  movieTrailerUrl: any;
  movieReviews: any;

  constructor(
    private activeRoute: ActivatedRoute,
    private moviesService: MoviesService,
    protected _sanitizer: DomSanitizer
  ) {
    this.activeRoute.params.subscribe((params) => {
      this.movieId = params['id'];
    });
  }

  ngOnInit() {

    this.moviesService.getTrailer(this.movieId).subscribe((data: any) => {
      this.movieTrailerUrl = this._sanitizer.bypassSecurityTrustResourceUrl(data.linkEmbed+'?autoplay=false&width=640');
    })

    this.moviesService.getMovieDetails(this.movieId).subscribe((data) => {
      console.log('Movie details - ', data);
      this.movieDetails = data;
    });

    this.moviesService.getMovieReviews(this.movieId).subscribe((data) => {
      console.log('Movie reviews - ', data);
      this.movieReviews = data;
    });
  }
}
