import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UsernameResponse {
  available: boolean,
  username: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  usernameAvailable(usernameEntered: string) {
    return this.http.post<UsernameResponse>('https://api.angular-email.com/auth/username',
      { username: usernameEntered })
  }
}
