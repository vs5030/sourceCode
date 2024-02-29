import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatchPassword } from '../validators/match-password';
import { UniqueUser } from '../validators/unique-user';

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
      ], [this.uniqueUser.validate]),
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
  }, {validators: [this.matchPassword.validate]}
  );

  onSubmit(){
    console.log('form submitted.');
  }

  constructor(private matchPassword: MatchPassword,private uniqueUser: UniqueUser){
  }

}
