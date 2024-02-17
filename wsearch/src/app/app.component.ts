import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  pages=[];
  constructor (private wikipedia: WikipediaService){}

  title = 'wsearch';
  onSearchReceived(val: string){
    this.wikipedia.search(val).subscribe((res:[]) => {
      console.log(res);
      this.pages = res;
  });

}
  
}

