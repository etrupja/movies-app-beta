import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { MOVIE_DETAILS } from 'src/assets/data/movie-details';
import { MOVIE_REVIEWS } from 'src/assets/data/movie-reviews';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  movieDetails: any;
  movieTrailerUrl: any;
  movieReviews: any;

  isLoadedTrailer: boolean = false;
  isLoadedDetails: boolean = false;
  isLoadedReviews: boolean = false;

  constructor(
    private _activeRoute: ActivatedRoute,
    private _router: Router,
    private _moviesService: MoviesService,
    protected _sanitizer: DomSanitizer
  ) {
    this._activeRoute.params.subscribe((params) => {
      this.loadMovieDetails(params['id']);
    });
  }

  ngOnInit() {


  }

  loadMovieDetails(movieId: string){
    this._moviesService.getTrailer(movieId).subscribe((data: any) => {
      this.movieTrailerUrl = this._sanitizer.bypassSecurityTrustResourceUrl(data.linkEmbed+'?autoplay=false&width=640');
      this.isLoadedTrailer = true;
    })

    this._moviesService.getMovieDetails(movieId).subscribe((data) => {
      this.movieDetails = data;
      this.isLoadedDetails = true;
    });

    this._moviesService.getMovieReviews(movieId).subscribe((data) => {
      this.movieReviews = data;
      this.isLoadedReviews = true;
    });
  }

  showMovieDetails(id: string) {
    this._router.navigate(['/details', id]);
  }
}
