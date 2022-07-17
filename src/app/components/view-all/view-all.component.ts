import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {

  @Input() title: string = '';
  @Input() redirectUrl: string = '';

  constructor() { }

  ngOnInit(): void {
  }
}
