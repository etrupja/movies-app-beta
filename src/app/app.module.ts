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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from './modal-service.service';
import { MoviesService } from './movies.service';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { FeedbackComponent } from './feedback/feedback.component';
import { AuthGuard } from './auth.guard';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { HttpClientModule } from '@angular/common/http';

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
    NotAuthorizedComponent
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
  providers: [ModalService, MoviesService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
