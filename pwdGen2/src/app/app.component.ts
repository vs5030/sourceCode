import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //title = 'pwdGen2';
  length = 0;
  
  password = '';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  onButtonClick(){
    //this.password = "My Password too late!"
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+';
    let validChars = '';
    if (this.includeLetters){
      validChars = validChars + letters;
    }
    if (this.includeNumbers){
      validChars = validChars + numbers;
    }
    if (this.includeSymbols){
      validChars = validChars + symbols;
    }
    
    let generatedPassword = '';
    let index = 0;
    for (let i=0; i<this.length; i++){
      index = Math.floor(Math.random() * validChars.length);
      generatedPassword = generatedPassword + validChars[index];
    }
    this.password = generatedPassword;
  }

  onChangeLength(value: string){
    const parsedValue = parseInt(value);
    if(!isNaN(parsedValue)){
      this.length=parsedValue;
    }

  }
  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }


}
