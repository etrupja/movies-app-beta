import { Component, OnInit } from '@angular/core';
import { FAN_FAVORITES } from 'src/assets/data/fan-favorites';
import { TOP_MOVIES } from 'src/assets/data/top-movies';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  topMovies = TOP_MOVIES;
  fanFavorites = FAN_FAVORITES;

  

  constructor() { }

  ngOnInit(): void {
    
    console.log(this.topMovies);
    
    console.log(this.fanFavorites);

  }

}
