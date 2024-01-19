import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { CharactersService } from '../characters.service';
import { ActivatedRoute } from '@angular/router';
//import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit, OnDestroy  {
 //@Input() characters;
 //@Output() emitSideFromList = new EventEmitter<{name:string, side:string}>();
 characters = [];
 charService: CharactersService; 
 activeRoute: ActivatedRoute; 
 loadedSide: 'all';
 subscription; 

 /**onEmitSide(charInfo){
  this.emitSideFromList.emit(charInfo);

 } */
  constructor(charService: CharactersService, activeRoute: ActivatedRoute) {
    this.charService = charService;
    this.activeRoute = activeRoute;
  }

  ngOnInit(){
    this.activeRoute.params.subscribe(
      (params) => {
        this.characters = this.charService.displayFilteredCharacters(params.side);
        this.loadedSide = params.side;
      }
    );
    this.subscription = this.charService.charactersChanged.subscribe(
      () => {
        this.characters=this.charService.displayFilteredCharacters(this.loadedSide);
      }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
