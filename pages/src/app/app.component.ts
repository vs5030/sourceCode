import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //title = 'pages';
  currentPage = 0;
  pictures = [
    {title: 'biking', url: './assets/biking.jpeg'},
    {title: 'mountain', url: './assets/mountain.jpeg'}, 
    {title: 'tree', url: './assets/tree.jpeg'},
    {title: 'mountain', url: './assets/mountain.jpeg'},
    {title: 'biking', url: './assets/biking.jpeg'},
    {title: 'mountain', url: './assets/mountain.jpeg'}, 
    {title: 'tree', url: './assets/tree.jpeg'},
    {title: 'mountain', url: './assets/mountain.jpeg'},
    {title: 'biking', url: './assets/biking.jpeg'},
    {title: 'mountain', url: './assets/mountain.jpeg'}, 
    {title: 'tree', url: './assets/tree.jpeg'},
    {title: 'mountain', url: './assets/mountain.jpeg'}
  ];

  checkWindowIndex(x: number){
    return Math.abs(this.currentPage - x) < 4;
  }

}
