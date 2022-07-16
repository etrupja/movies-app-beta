import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FAN_FAVORITES } from 'src/assets/data/fan-favorites';
import { TOP_MOVIES } from 'src/assets/data/top-movies';
import { ModalComponent } from '../modal/modal.component';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from '../modal-service.service';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  topMovies = TOP_MOVIES;
  fanFavorites = FAN_FAVORITES;

  favoriteMovies: any;
  favoriteTVs: any;



  constructor(private router: Router,
    private modalService: NgbModal,
    private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getFavoriteMovies().subscribe((data) => {
      this.favoriteMovies = data;
    });

    this.moviesService.getFavoriteTVs().subscribe((data) => {
      this.favoriteTVs = data;
      console.log('this.favoriteTVs - ', this.favoriteTVs);
    });
  }


  openModal(){

    const movieData = {
      title: 'Izzat Nadiri',
      age: 26
    }

    const modalRef = this.modalService.open(ModalComponent, {
      size: 'lg'
    });
    modalRef.componentInstance.movieData = movieData;

  }

  showMovieDetails(id: string){
    this.router.navigate(['/details', id]);
  }
}
