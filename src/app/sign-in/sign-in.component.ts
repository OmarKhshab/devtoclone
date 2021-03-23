import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent  {
  constructor(private firebase: FirebaseService){

  }
  public twitterLogin(){
    this.firebase.signIn();

  }
  public githubLogin(){
    this.firebase.signIngit();
  }
  onSubmit(form: NgForm) {
    const date = {
      email: form.value.email,
      password: form.value.password
    };
    this.firebase.signInEmail(date.email,date.password);
  }
}

