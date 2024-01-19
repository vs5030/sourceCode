import { Component } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrl: './collections-home.component.css'
})
export class CollectionsHomeComponent {

  data = [
    {employed: 'yes', name: 'Joe', age:20, title: 'engineer'},
    {employed: 'no', name: 'Jill', age: 23, title: 'designer'},
    {employed: 'looking', name: 'John', age: 25, title: 'analyst'}
  ];
  headers = [
    {key: 'name', label: 'Name'},
    {key: 'age', label: 'Age'},
    {key: 'title', label: 'Title'},
    {key: 'employed', label: 'Employed'}

  ];

}
