import { Component } from '@angular/core';
import { loremIpsum } from 'lorem-ipsum';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'typing';

  content = 'You win!';
  randomText = loremIpsum();
  enteredText = '';
  //randomTextArray = this.randomText.split("");
  //showMessage = false;
  //falseCharacterEntered = false;

  onUserInput(value: string){
    this.enteredText = value;
    /*if (this.enteredText[this.enteredText.length -1]!==this.randomTextArray[this.enteredText.length -1]){
        this.falseCharacterEntered = true;
    }    
    if(this.enteredText.length === this.randomText.length && !this.falseCharacterEntered){
      this.showMessage=true;
    }*/
  }

  compare(randomLetter: string, enteredLetter: string){
    if (!enteredLetter){
      return 'pending';
    }
    return randomLetter===enteredLetter ?  'correct' : 'incorrect';
    
  }

  
}
