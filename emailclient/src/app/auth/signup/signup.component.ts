import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatchPassword } from '../validators/match-password';
import { UniqueUser } from '../validators/unique-user';
import { AuthService, SignupCredentials } from '../auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

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
    passwordConfirmation: new FormControl('',
    [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
    ])
  }, {validators: [this.matchPassword.validate]}
  );

  onSubmit(){
    if (this.authForm.invalid){
      return;
    }
    console.log('form submitted.');
    this.authService.signupUser(this.authForm.value as SignupCredentials).subscribe(
      {
        next: () => {
          //console.log('Observable emitted the next value: ' + value.username);
          //this.authForm.set
          this.router.navigateByUrl('/inbox');
        },
        error: (err) => {
          console.error('Observable emitted an error: ' + JSON.stringify(err) );
          if (err.status===0){
            this.authForm.setErrors({connectionError: true});
          }
          else{
            this.authForm.setErrors({requestNotSuccessful: true})
          }
        }
      });
        
  }

  constructor(private matchPassword: MatchPassword,
    private uniqueUser: UniqueUser,
    private authService: AuthService,
    private router: Router){
  }

}
