import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, pluck } from 'rxjs';

interface WikipediaResponse {
  query: {
    search: {
      title: string;
      snippet: string;
      pageid: number;
    }[]
  }
}


@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  constructor(private http: HttpClient) {}

  public search(searchVal:string){
    return this.http.get<WikipediaResponse>('https://en.wikipedia.org/w/api.php', {
      params: {
        action: 'query',
        list: 'search',
        srsearch: searchVal,
        utf8: '1',
        format: 'json',
        origin: '*'
      }
    }).pipe(
      //map((res:WikipediaResponse) => res.query.search)
      pluck('query','search')
    );
  }    

  
  
  }


