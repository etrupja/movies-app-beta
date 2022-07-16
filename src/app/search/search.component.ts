import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(
    private _activeRoute: ActivatedRoute,
    private _router: Router,
    private _modalService: NgbModal,
    private _moviesService: MoviesService,
    protected _sanitizer: DomSanitizer
  ) {
    this._activeRoute.params.subscribe((params) => {
      this.movieTitle = params['title'];
    });
  }

  ngOnInit(): void {
    console.log('Search for: ', this.movieTitle);
    this._moviesService
      .getMovieSearchTitle(this.movieTitle)
      .subscribe((data: any) => {
        this.searchResult = data.results;
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
        movieTrailerUrl: this._sanitizer.bypassSecurityTrustResourceUrl(data.linkEmbed+'?autoplay=false&width=800')
      };
      const modalRef = this._modalService.open(ModalComponent, {
        size: 'lg',
      });
      modalRef.componentInstance.movieData = movieData;
    });
  }
}
