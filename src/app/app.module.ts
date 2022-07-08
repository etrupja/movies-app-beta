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
import { LoginComponent } from './login/login.component';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';

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
    ModalComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SocialLoginModule
  ],
  providers: [ModalService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '455443276692-03hgvu2trsdakc72tn28jgusonnhmnge.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('507435137820618')
          }
        ],
        onError: (err) => {
          console.error('Login error: ', err);
        }
      } as SocialAuthServiceConfig,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
