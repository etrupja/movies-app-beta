import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { DetailsComponent } from './components/details/details.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ViewAllComponent } from './components/view-all/view-all.component';
import { ActorDetailComponent } from './components/movie-actor-details/movie-actor-details.component';
import { MovieReviewDetailsComponent } from './components/movie-review-details/movie-review-details.component';
import { DetailsReviewsComponent } from './components/details-reviews/details-reviews.component';
import { DetailsActorsComponent } from './components/details-actors/details-actors.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './components/modal/modal.component';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { AuthGuard } from './auth.guard';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotAuthorizedComponent } from './components/not-authorized/not-authorized.component';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './components/loader/loader.component';
import { MoviesService } from './services/movies.service';

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
    MovieReviewDetailsComponent,
    FeedbackComponent,
    ModalComponent,
    NotAuthorizedComponent,
    LoaderComponent
  ],

  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,

    BrowserAnimationsModule,
    ToastrModule.forRoot(), // ToastrModule added

    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'etrupja.eu.auth0.com',
      clientId: 'vQM0lYiYMivXTL4wbeCNS9BiPnPeEqZU'
    })
  ],
  providers: [MoviesService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
