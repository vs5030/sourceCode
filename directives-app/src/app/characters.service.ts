import { Injectable } from '@angular/core';
import { WriteLogService } from './write-log.service';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
//import 'rxjs/operators/map';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private characters = [
    {name: "Skywalker", side: ""},
    {name: "Darthvader", side: ""}
];

  private writeService: WriteLogService;
  charactersChanged = new Subject<void>();
  http: HttpClient;

  constructor(writeService: WriteLogService, http: HttpClient) {
    this.writeService = writeService;
    this.http = http;
  }

  fetchCharacters(){
    this.http.get('https://swapi.dev/api/people')
    .subscribe(
      (data:any) => {
        console.log(data);
        const extractedChars = data.results;
        const chars = extractedChars.map((char) => {
          return {name: char.name, side: ''} 

        });
        console.log(chars);
        this.characters=chars;
        this.charactersChanged.next();
        //return chars;
      }
    );
  }

  displayFilteredCharacters(chosenList){
    if (chosenList === 'all'){
      return this.characters.slice();
    }
    return this.characters.filter((char) => {
      return char.side === chosenList;
    });
  }

  updateSide(newInfo){
    const pos = this.characters.findIndex((char) => {
      return char.name === newInfo.name;
    });
    
    this.characters[pos].side = newInfo.side;
    this.charactersChanged.next();
    this.writeService.writeLog("side change for "+ newInfo.name + " ,new side is: " + newInfo.side);
  }

  addCharacter(name, side){
   const newChar = {name: name, side: side};
   const pos = this.characters.findIndex((char) => {
    return char.name === name;
   });
   
   if(pos === -1){
    this.characters.push(newChar);
   }

  }
}
