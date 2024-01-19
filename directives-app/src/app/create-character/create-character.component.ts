import { Component } from '@angular/core';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrl: './create-character.component.css'
})
export class CreateCharacterComponent {
  availableSides = [
    {display:'None', value:''},
    {display:'Light', value:'light'},
    {display:'Dark', value:'dark'}
  ];

    charService: CharactersService; 

  constructor(charService: CharactersService){
    this.charService = charService;
  }

  onSubmit(submittedForm){
    console.log('form submitted!');
    console.log(submittedForm);
    if (submittedForm.status === 'INVALID'){
      return;
    }
    this.charService.addCharacter(submittedForm.value.chName, submittedForm.value.side);
  
  }
}
