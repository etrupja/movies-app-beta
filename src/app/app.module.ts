import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ViewAllComponent } from './view-all/view-all.component';
import { ActorDetailComponent } from './movie-actor-details/movie-actor-details.component';
import { MovieReviewDetailsComponent } from './movie-review-details/movie-review-details.component';
import { DetailsReviewsComponent } from './details-reviews/details-reviews.component';
import { DetailsActorsComponent } from './details-actors/details-actors.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SearchComponent,
    DetailsComponent,
    DetailsReviewsComponent,
    DetailsActorsComponent,
    ViewAllComponent,
    ActorDetailComponent,
    MovieReviewDetailsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
