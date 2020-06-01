import { Component } from '@angular/core';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { using } from 'rxjs';
import { error } from '@angular/compiler/src/util';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Navbar';
  
  constructor( private authService: AuthService) { }  

   signInWithGoogle() {
     console.log("Inside Google Sign");
     console.log(GoogleLoginProvider.PROVIDER_ID);
     this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(socialusers => {
      
     alert("Welcome  " + socialusers.firstName + " " + socialusers.lastName + "\n" + " You have Signed in using " + GoogleLoginProvider.PROVIDER_ID);

       console.log(socialusers.firstName);
       console.log(socialusers.lastName);
       console.log(socialusers.email);
      
     }).catch(_onrejected => {
       alert("Not Login  " + _onrejected);
     }

       )
   
}
  
}
