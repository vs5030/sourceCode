import { Component } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrl: './views-home.component.css'
})
export class ViewsHomeComponent {
  stats = [
    {value: 20, label: 'number of users'},
    {value: 54, label: 'views'},
    {value:102, label: 'likes'}
  ];

  items = [
    {image: './assets/images/couch.jpeg', header:'couch', description:'couch pic'},
    {image: './assets/images/dresser.jpeg', header:'dresser', description:'dresser pic'}

  ];

}
