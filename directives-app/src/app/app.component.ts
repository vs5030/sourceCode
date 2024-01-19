import { Component, OnInit } from '@angular/core';
import { CharactersService } from './characters.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'directives-app';

  charService: CharactersService;

  constructor(charService: CharactersService){
    this.charService = charService; 
  }

  ngOnInit(): void {
  this.charService.fetchCharacters();

}

}
