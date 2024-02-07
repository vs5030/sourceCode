import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  term = '';
  @Output() searchTerm = new EventEmitter<string>();
  // onInput(value: string) {
  //   this.term = value;
  // } 

  onSubmit(event: any){
    event.preventDefault();
    this.searchTerm.emit(this.term);
  }


}
