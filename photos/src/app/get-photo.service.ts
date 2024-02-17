import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

interface photoUrl{
  urls: {
    small: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class GetPhotoService {

  constructor(private http: HttpClient) { }

  public getPhoto(){
    return this.http.get<photoUrl>('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: 'Client-ID cZ70oecrTtb0iAZ3wmkXj0GHV1lHqTGmYaKutxx3AyI'
      }
    }).pipe(
        map(res => res.urls.small)
      );
  }
}
