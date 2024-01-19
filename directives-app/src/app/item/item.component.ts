import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
 @Input() characters;
 //@Output() sideEmit = new EventEmitter<{name: string, side: string}>();
 charService: CharactersService;

 constructor(charService: CharactersService){
  this.charService = charService;
 }

 onSelectSide(side){
  //this.characters.side = side;
  //this.sideEmit.emit({name: this.characters.name, side:side});
  this.charService.updateSide({name:this.characters.name, side: side})
 }


}
