import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  authForm = new FormGroup ({
    username:  new FormControl('', 
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern(/^[a-z0-9]+$/)
      ]),
    password: new FormControl('', 
    [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
    ]),
    confirmPassword: new FormControl('',
    [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
    ])
  }
  );

  onSubmit(){
    console.log('form submitted.');
  }
}