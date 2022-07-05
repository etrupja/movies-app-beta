import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-actor-details',
  templateUrl: './movie-actor-details.component.html',
  styleUrls: ['./movie-actor-details.component.css']
})
export class ActorDetailComponent implements OnInit {

  @Input() actors: any[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.actors);
  }

}
