import { Component } from '@angular/core';
//import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {
  
  //chosenList = 'all';
  //charService: CharactersService;
  //characters=[];
  
  //constructor (charService: CharactersService){
   // this.charService = charService;
  //}

  /*characters = [
    {name: "Skywalker", side: ""},
    {name: "Darthvader", side: ""}
];

  updateSide(newInfo){
    const pos = this.characters.findIndex((char) => {
      return char.name === newInfo.name;
    });
    
    this.characters[pos].side = newInfo.side;
  }

  chosenList = 'all';

  displayFilteredCharacters(){
    if (this.chosenList === 'all'){
      return this.characters.slice();
    }
    return this.characters.filter((char) => {
      return char.side === this.chosenList;
    });
  }*/

  /*onChooseSide(side){
    this.chosenList = side;
    
  }*/
}
