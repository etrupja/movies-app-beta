import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: SocialAuthService) { }

  ngOnInit(): void {
  }

  loginWithGoogle() {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  loginWithFacebook() {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut() {
    this.authService.signOut();
  }

}
