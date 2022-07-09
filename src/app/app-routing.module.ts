import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { SearchComponent } from './search/search.component';
import { DetailsActorsComponent } from './details-actors/details-actors.component';
import { DetailsReviewsComponent } from './details-reviews/details-reviews.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search/:title', component: SearchComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'details/:id/actors', component: DetailsActorsComponent },
  { path: 'details/:id/reviews', component: DetailsReviewsComponent },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
