import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  constructor(private http: HttpClient) { }

  search(searchVal: string){
    return this.http.get('https://en.wikipedia.org/w/api.php', 
     { params: 
      {
        action: "query",
        list: "search",
        srsearch: searchVal,
        utf8: "1",
        format: "json",
        origin: "*"
      }
     });
    //return 'here are the search results for loser wiki too late: ' +  searchVal;  
  }

}
