import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUPComponent implements OnInit {

  constructor(private firebase: FirebaseService) { }

  ngOnInit(): void {
  }
  public onSubmit(form: NgForm) {
    const date = {
      email: form.value.email,
      password: form.value.password
    };
    this.firebase.signUpEmail(date.email,date.password);
  }
}
