import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //title = 'cards';
  posts = [
    {
      title: "tree",
      userName: "nature",
      imageUrl: "./assets/tree.jpeg",
      content: "Tree image."
  },
  {
    title: "mountain",
    userName: "snow",
    imageUrl: "./assets/mountain.jpeg",
    content: "Snowy mountain."
  },
  {
    title: "biking",
    userName: "bike",
    imageUrl: "./assets/biking.jpeg",
    content: "Biking.."
  }

  ];
}
