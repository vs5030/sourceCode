import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, filter, tap } from 'rxjs';


interface UsernameResponse {
  available: boolean,
  username: string
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
  signedin$ = new BehaviorSubject(false);

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

  signout(){
    return this.http.post(this.rootUrl + '/auth/signout', {}).pipe(
      tap(()=> {
        this.signedin$.next(false);
      })
    );
  }

}
