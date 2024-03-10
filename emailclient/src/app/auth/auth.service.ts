import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, filter, tap, throwError } from 'rxjs';


interface UsernameResponse {
  available: boolean,
  username: string
}

export interface SigninCredentials {
  username: string,
  password: string
}

export interface SignupCredentials {
  username: string,
  password: string,
  passwordConfirmation: string
}

interface SignupResponse {
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  rootUrl = 'https://api.angular-email.com';
  signedin$ = new BehaviorSubject<boolean|null>(null);

  constructor(private http: HttpClient) {
  }

  usernameAvailable(usernameEntered: string) {
    return this.http.post<UsernameResponse>(this.rootUrl + '/auth/username',
      { username: usernameEntered })
  }

  signupUser(credentials: SignupCredentials) {
    return this.http.post<SignupResponse>(this.rootUrl + '/auth/signup', credentials).pipe(
      tap(() => {
        this.signedin$.next(true);
      })
    );
  }
  
  checkSignedIn(){
    return this.http.get<{authenticated:boolean, username:string}>(this.rootUrl + '/auth/signedin', {withCredentials:true}).pipe(
      //filter((value) => value.authenticated === true),
      tap(({ authenticated }) => {
        this.signedin$.next(authenticated);
      })
    );
  }

  signin(signinCredentials: SigninCredentials){
    return this.http.post(this.rootUrl + '/auth/signin', signinCredentials).pipe(
      tap(()=>{
        this.signedin$.next(true);
      })
      // catchError(err => {
      //   this.signedin$.next(false);
      //   throw 'error in source. Details: ' + JSON.stringify(err);
      // })
    );
  }

  signout(){
    return this.http.post(this.rootUrl + '/auth/signout', {}).pipe(
      tap(()=> {
        this.signedin$.next(false);
      })
    );
  }

}
