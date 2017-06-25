import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  showSignOut = false;
  private authStateSubscription: Subscription; 

  constructor(private afAuth: AngularFireAuth) {
  }

  ngOnDestroy(): void {
    this.authStateSubscription.unsubscribe();
  }
  ngOnInit(): void {
    this.authStateSubscription = this.afAuth.authState.subscribe( (user: firebase.User) => { 
      if (user) {
        //signin just happened
        this.showSignOut = true;
        console.log("Sign in finished");
        
      } else {
        //signout just happened
        this.showSignOut = false;
        console.log("Sign out finished");
      }
    });
  }

  signOut(): void {
    console.log("TODO: Sign out the user.");
    this.afAuth.auth.signOut();
  }
}