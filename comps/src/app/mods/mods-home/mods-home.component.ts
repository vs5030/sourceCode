import { Component } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrl: './mods-home.component.css'
})
export class ModsHomeComponent {
  showModal = false; 

  items = [
    {title: 'question 1', content: 'answer 1'},
    {title: 'question 2', content: 'answer 2'},
    {title: 'question 3', content: 'answer 3'}
  ];

  openModal(){
    this.showModal = !this.showModal;
  }
}
