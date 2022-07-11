import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent implements OnInit {
  feedback: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(public auth: AuthService) {}

  ngOnInit(): void {}
}
