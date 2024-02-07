import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor (private wikipedia: WikipediaService){}

  title = 'wsearch';
  pages = [];
  //searchValue = '';
  onSearchReceived(val: string){
    //this.searchValue = val;
    console.log('value received is: ', val);
    //const results = this.wikipedia.search(val);
    //console.log(results);
    this.wikipedia.search(val).subscribe((response: any) => {
      console.log(response);
      this.pages = response.query.search;
  });
  }
  

}
