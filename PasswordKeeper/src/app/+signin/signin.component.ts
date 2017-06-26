import { Component, OnInit } from '@angular/core';
import 'rosefire';
import { AngularFireAuth } from "angularfire2/auth";
import { environment } from "environments/environment";
import { Router } from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth, private router: Router) {  }

  ngOnInit() {
  }

  signInWithRosefire(): void {
    Rosefire.signIn(environment.rosefireRegistryToken, (error, rfUser: RosefireUser) => {
      if (error) {
        // User not logged in!
        console.error(error);
        return;
      }
      console.log("Rosefire is don. User: ", rfUser);
      this.afAuth.auth.signInWithCustomToken(rfUser.token).then( (authState) => { 
        console.log("Firebase signin is done now too. User: ", authState);
        this.router.navigate(["/"]);
      });
    });

  }
}
