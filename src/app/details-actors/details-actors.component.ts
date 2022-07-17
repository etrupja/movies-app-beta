import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MOVIE_DETAILS } from 'src/assets/data/movie-details';
import { MOVIE_REVIEWS } from 'src/assets/data/movie-reviews';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-details-actors',
  templateUrl: './details-actors.component.html',
  styleUrls: ['./details-actors.component.css']
})
export class DetailsActorsComponent implements OnInit {

  movieId: string = '';
  movieCast: any;
  isLoaded: boolean = false;

  constructor(private activeRoute: ActivatedRoute, private moviesService: MoviesService) {
    this.activeRoute.params.subscribe(params => {
      this.movieId = params['id'];
    });
  }

  ngOnInit(): void {
    this.moviesService.getMovieFullCast(this.movieId).subscribe(data => {
      this.movieCast = data;
      this.isLoaded = true;
    });
  }
}
