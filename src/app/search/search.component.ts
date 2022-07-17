import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationStart,
  Router,
} from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SEARCH_RESULT } from 'src/assets/data/search-result';
import { ModalComponent } from '../modal/modal.component';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  movieTitle: string = '';
  searchResult: any[] = [];
  isLoaded: boolean = false;

  constructor(
    private _activeRoute: ActivatedRoute,
    private _router: Router,
    private _modalService: NgbModal,
    private _moviesService: MoviesService,
    protected _sanitizer: DomSanitizer
  ) {
    this._activeRoute.params.subscribe((params) => {
      this.movieTitle = params['title'];
      this.loadMovies(params['title']);
    });
  }

  ngOnInit(): void {}

  loadMovies(title: string) {
    this.isLoaded = false;
    this._moviesService
      .getMovieSearchTitle(title)
      .subscribe((data: any) => {
        this.searchResult = data.results;
        this.isLoaded = true;
      });
  }

  showDetails(id: any) {
    this._router.navigate(['/details', id]);
  }

  openModal(movie: any) {
    this._moviesService.getTrailer(movie.id).subscribe((data: any) => {
      const movieData = {
        title: movie.title,
        age: 26,
        movieTrailerUrl: this._sanitizer.bypassSecurityTrustResourceUrl(
          data.linkEmbed + '?autoplay=false&width=800'
        ),
      };
      const modalRef = this._modalService.open(ModalComponent, {
        size: 'lg',
      });
      modalRef.componentInstance.movieData = movieData;
    });
  }
}
