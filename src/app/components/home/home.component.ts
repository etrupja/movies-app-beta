import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FAN_FAVORITES } from 'src/assets/data/fan-favorites';
import { TOP_MOVIES } from 'src/assets/data/top-movies';
import { ModalComponent } from '../modal/modal.component';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer } from '@angular/platform-browser';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  sliders: any[] = [
    {
      title: 'Spiderhead',
      image: 'https://m.media-amazon.com/images/M/MV5BNDVkZTc4OTktNTAyOC00MzQxLThiZjMtM2M3MTlmYzFjY2FkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX1000_CR0,0,1000,563_.jpg',
      crew: 'Joseph Kosinski (dir.), Chris Hemsworth, Miles Teller',
      slide: 'Slide 1'
    },
    {
      title: 'Top Gun: Maverick (2022)',
      image: 'https://m.media-amazon.com/images/M/MV5BOWQwOTA1ZDQtNzk3Yi00ZmVmLWFiZGYtNjdjNThiYjJhNzRjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_QL75_UX1000_CR0,0,1000,563_.jpg',
      crew: 'Joseph Kosinski (dir.), Tom Cruise, Jennifer Connelly',
      slide: 'Slide 2'
    },
    {
      title: 'Lightyear',
      image: 'https://m.media-amazon.com/images/M/MV5BYTg2Zjk0ZTctM2ZmMi00MDRmLWJjOGYtNWM0YjBmZTBjMjRkXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_QL75_UX1000_CR0,0,1000,563_.jpg',
      crew: 'Angus MacLane (dir.), Chris Evans, Keke Palmer',
      slide: 'Slide 3'
    },
  ]

  favoriteMovies: any;

  topTVs: any;
  topMovies: any;

  constructor(
    private _router: Router,
    private _modalService: NgbModal,
    private _moviesService: MoviesService,
    protected _sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this._moviesService.getFavoriteMovies().subscribe((data) => {
      this.favoriteMovies = data;
    });

    this._moviesService.getTop250TVs().subscribe((data) => {
      this.topTVs = data;
    });

    this._moviesService.getTop250Movies().subscribe((data:any) => {
      this.topMovies = data.items?.slice(0, 3);
    });
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

  showMovieDetails(id: string) {
    this._router.navigate(['/details', id]);
  }
}
