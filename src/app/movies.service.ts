import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  API_KEY = 'k_vkpokjbm';

  COMING_SOON_API = "https://imdb-api.com/en/API/ComingSoon/{API_KEY}";

  MOVIE_DETAILS_API = "https://imdb-api.com/en/API/Title/{API_KEY}/{MOVIE_ID}";
  MOVIE_TRAILER_API = "https://imdb-api.com/API/Trailer/{API_KEY}/{MOVIE_ID}";
  MOVIE_REVIEWS_API = "https://imdb-api.com/en/API/Reviews/{API_KEY}/{MOVIE_ID}";
  MOVIE_FULL_CAST_API = "https://imdb-api.com/en/API/FullCast/{API_KEY}/{MOVIE_ID}";

  FAVORITE_MOVIES_API = "https://imdb-api.com/en/API/MostPopularMovies/{API_KEY}";
  FAVORITE_TV_API = "https://imdb-api.com/en/API/Top250TVs/{API_KEY}";

  constructor(private httpClient: HttpClient) { }

  getMovieDetails(movieId: string) {
    return this.httpClient.get(this.MOVIE_DETAILS_API.replace('{API_KEY}', this.API_KEY).replace('{MOVIE_ID}', movieId));
  }

  getTrailer(movieId: string) {
    return this.httpClient.get(this.MOVIE_TRAILER_API.replace("{API_KEY}", this.API_KEY).replace("{MOVIE_ID}", movieId));
  }

  getMovieReviews(movieId: string) {
    return this.httpClient.get(this.MOVIE_REVIEWS_API.replace("{API_KEY}", this.API_KEY).replace("{MOVIE_ID}", movieId));
  }

  getMovieFullCast(movieId: string) {
    return this.httpClient.get(this.MOVIE_FULL_CAST_API.replace("{API_KEY}", this.API_KEY).replace("{MOVIE_ID}", movieId));
  }

  getFavoriteMovies() {
    return this.httpClient.get(this.FAVORITE_MOVIES_API.replace("{API_KEY}", this.API_KEY));
  }

  getFavoriteTVs() {
    return this.httpClient.get(this.FAVORITE_TV_API.replace("{API_KEY}", this.API_KEY));
  }
}