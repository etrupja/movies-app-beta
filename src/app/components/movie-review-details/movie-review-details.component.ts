import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-review-details',
  templateUrl: './movie-review-details.component.html',
  styleUrls: ['./movie-review-details.component.css']
})
export class MovieReviewDetailsComponent implements OnInit {

  @Input() movieReviews: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
