import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  public isLoggedin = new BehaviorSubject(false);
  private provider = new firebase.default.auth.TwitterAuthProvider();
  private gitProvider = new firebase.default.auth.GithubAuthProvider();
  constructor(public firebaseAuth : AngularFireAuth, public router:Router) { }
  public signIn(){
    this.firebaseAuth.signInWithPopup(this.provider).then((result) =>{
      localStorage.setItem('loggedIn', 'true');
      this.isLoggedin.next(true);
      this.router.navigate(['']);
      console.log(result);
    }).catch((error)=>{
      console.log(error);
    })
  }
  public signIngit(){
    this.firebaseAuth.signInWithPopup(this.gitProvider).then((result) =>{
      this.isLoggedin.next(true);
      localStorage.setItem('loggedIn', 'true');
      this.router.navigate(['']);
      console.log(result);
    }).catch((error)=>{
      console.log(error);
    })
  }
  public signout(){
    this.isLoggedin.next(false);
    localStorage.removeItem('loggedIn');
    this.firebaseAuth.signOut();
    this.router.navigate['signin'];
  }
  public signUpEmail(email:string, password: string){
    this.firebaseAuth.createUserWithEmailAndPassword(email,password);
  }

  public signInEmail(email: string, password:string){
    this.firebaseAuth.signInWithEmailAndPassword(email,password).then(user =>{
      console.log(user);
      this.isLoggedin.next(true);
      localStorage.setItem('loggedIn', 'true');
      this.router.navigate([''])
    }).catch((error)=>{
      console.log(error);
    })
  }
}
