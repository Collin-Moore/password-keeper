import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase/app';
import { Router } from "@angular/router";
import { FirebaseListObservable, AngularFireDatabase } from "angularfire2/database";
import { Password } from "app/models/password.model";
import { MdDialog, MdDialogConfig } from "@angular/material";
import { PasswordDialogComponent } from "app/password-dialog/password-dialog.component";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  private authStateSubscription: Subscription;
  private firebasePath: string;
  passwordStream: FirebaseListObservable<Password[]>;

  constructor(private afAuth: AngularFireAuth,
              private router: Router,
              private db: AngularFireDatabase,
              private dialog: MdDialog) {
  }

  ngOnDestroy(): void {
    this.authStateSubscription.unsubscribe();
  }
  ngOnInit(): void {
    this.authStateSubscription = this.afAuth.authState.subscribe( (user: firebase.User) => { 
      if (user) {
        //signin just happened

        console.log("User is signed in as: ", user.uid);
        this.firebasePath = `/users/${user.uid}`;
        this.passwordStream = this.db.list(this.firebasePath);
      } else {
        //signout just happened
        this.router.navigate(["/signin"]);
        console.log("User is not signed in");
      }
    });
  }

  showPasswordDialog(): void {
    console.log("Show dialog");
    const dialogConfig = new MdDialogConfig();
    dialogConfig.data = {firebasePath: this.firebasePath};
    this.dialog.open(PasswordDialogComponent, dialogConfig);
    
  }
}
