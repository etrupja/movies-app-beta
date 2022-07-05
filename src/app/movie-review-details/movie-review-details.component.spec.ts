import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieReviewDetailsComponent } from './movie-review-details.component';

describe('MovieReviewDetailsComponent', () => {
  let component: MovieReviewDetailsComponent;
  let fixture: ComponentFixture<MovieReviewDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieReviewDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieReviewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
