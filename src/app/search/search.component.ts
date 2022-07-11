import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SEARCH_RESULT } from 'src/assets/data/search-result';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  movieTitle: string = '';
  searchResult: any[] = [];

  constructor(private activeRoute: ActivatedRoute, private router: Router, private modalService: NgbModal) {
    this.activeRoute.params.subscribe(params => {
      this.movieTitle = params['title'];
    });
  }

  ngOnInit(): void {
    console.log('Search for: ', this.movieTitle);
    this.searchResult = SEARCH_RESULT;
  }

  showDetails(id: any){
    this.router.navigate(['/details', id]);
  }

  openModal(movie: any){

    const movieData = {
      title: movie.title,
      age: 26
    }

    const modalRef = this.modalService.open(ModalComponent, {
      size: 'lg'
    });
    modalRef.componentInstance.movieData = movieData;

  }
}
