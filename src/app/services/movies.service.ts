import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Global } from '../common/global-constants';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  constructor(private httpClient: HttpClient) { }

  getMovieDetails(movieId: string) {
    return this.httpClient.get(Global.MOVIE_DETAILS_API.replace('{API_KEY}', Global.IMDB_API_KEY).replace('{MOVIE_ID}', movieId));
  }

  getTrailer(movieId: string) {
    return this.httpClient.get(Global.MOVIE_TRAILER_API.replace("{API_KEY}", Global.IMDB_API_KEY).replace("{MOVIE_ID}", movieId));
  }

  getMovieReviews(movieId: string) {
    return this.httpClient.get(Global.MOVIE_REVIEWS_API.replace("{API_KEY}", Global.IMDB_API_KEY).replace("{MOVIE_ID}", movieId));
  }

  getMovieFullCast(movieId: string) {
    return this.httpClient.get(Global.MOVIE_FULL_CAST_API.replace("{API_KEY}", Global.IMDB_API_KEY).replace("{MOVIE_ID}", movieId));
  }

  getFavoriteMovies() {
    return this.httpClient.get(Global.FAVORITE_MOVIES_API.replace("{API_KEY}", Global.IMDB_API_KEY));
  }

  getTop250TVs() {
    return this.httpClient.get(Global.TOP250_TV_API.replace("{API_KEY}", Global.IMDB_API_KEY));
  }

  getTop250Movies() {
    return this.httpClient.get(Global.TOP250_MOVIES_API.replace("{API_KEY}", Global.IMDB_API_KEY));
  }

  getMovieSearchTitle(movieTitle: string) {
    return this.httpClient.get(Global.MOVIE_SEARCH_TITLE_API.replace("{API_KEY}", Global.IMDB_API_KEY).replace("{MOVIE_TITLE}", movieTitle));
  }

}
