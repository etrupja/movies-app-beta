import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { SearchComponent } from './search/search.component';
import { DetailsActorsComponent } from './details-actors/details-actors.component';
import { DetailsReviewsComponent } from './details-reviews/details-reviews.component';
import { NewMovieComponent } from './new-movie/new-movie.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search/:title', component: SearchComponent },
  {
    path: 'details/:id',
    component: DetailsComponent,
    children: [
      { path: 'actors', component: DetailsActorsComponent },
      { path: 'reviews', component: DetailsReviewsComponent },
    ],
  },
  {
    path: 'new-movie',
    component: NewMovieComponent,
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
