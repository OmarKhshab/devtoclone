import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent  {

  onSubmit(form: NgForm) {
    const date = {
      email: form.value.email,
      password: form.value.password
    };
  }
}

