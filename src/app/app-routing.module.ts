import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { SearchComponent } from './components/search/search.component';
import { DetailsActorsComponent } from './components/details-actors/details-actors.component';
import { DetailsReviewsComponent } from './components/details-reviews/details-reviews.component';
import { AuthGuard } from './auth.guard';
import { NotAuthorizedComponent } from './components/not-authorized/not-authorized.component';
import { FeedbackComponent } from './components/feedback/feedback.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search/:title', component: SearchComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'details/:id/actors', component: DetailsActorsComponent },
  { path: 'details/:id/reviews', component: DetailsReviewsComponent },
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
