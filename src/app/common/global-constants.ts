export class Global {
  public static IMDB_API_KEY: string = 'k_vkpokjbm';

  //API endpoints
  public static COMING_SOON_API = "https://imdb-api.com/en/API/ComingSoon/{API_KEY}";
  public static MOVIE_DETAILS_API = "https://imdb-api.com/en/API/Title/{API_KEY}/{MOVIE_ID}";
  public static MOVIE_TRAILER_API = "https://imdb-api.com/API/Trailer/{API_KEY}/{MOVIE_ID}";
  public static MOVIE_REVIEWS_API = "https://imdb-api.com/en/API/Reviews/{API_KEY}/{MOVIE_ID}";
  public static MOVIE_FULL_CAST_API = "https://imdb-api.com/en/API/FullCast/{API_KEY}/{MOVIE_ID}";
  public static FAVORITE_MOVIES_API = "https://imdb-api.com/en/API/MostPopularMovies/{API_KEY}";
  public static TOP250_TV_API = "https://imdb-api.com/en/API/Top250TVs/{API_KEY}";
  public static TOP250_MOVIES_API = "https://imdb-api.com/en/API/Top250Movies/{API_KEY}";
  public static MOVIE_SEARCH_TITLE_API = "https://imdb-api.com/en/API/SearchTitle/{API_KEY}/{MOVIE_TITLE}";
}
