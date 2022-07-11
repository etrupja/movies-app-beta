import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { SearchComponent } from './search/search.component';
import { DetailsActorsComponent } from './details-actors/details-actors.component';
import { DetailsReviewsComponent } from './details-reviews/details-reviews.component';
import { AuthGuard } from './auth.guard';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { FeedbackComponent } from './feedback/feedback.component';

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
    path: 'feedback',
    component: FeedbackComponent,
    canActivate: [AuthGuard]
  },
  { path: '401', component: NotAuthorizedComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
