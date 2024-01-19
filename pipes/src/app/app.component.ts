import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor (private cp: CurrencyPipe){}
  //title = 'pipes';
  name: string | undefined; 
  date: string | undefined;
  amount: number | undefined;
  height: number | undefined;
  miles: number | undefined;
  //cp: CurrencyPipe | undefined; 
  currencyCode: '' | undefined;
  currency: string | undefined;
  
  onChangeName(value: string){
    this.name = value;
  }

  onChangeDate(value:string){
    this.date = value;
  }

  onChangeAmount(value: string){
    this.amount = parseFloat(value);
  }

  onChangeHeight(value: string){
  //currencyCode = '';
    let a  = (this.cp).transform(value, this.currencyCode, "code", '1.6');
  this.currency= a?.split("USD").join('');
  console.log("currency: "+this.currency);
  this.currency = this.currency?.replace(/,/g,"");
  console.log("currency: "+this.currency);
    this.height = parseFloat(value);
    console.log("a: "+a);
  }

  onChangeMiles(value: string){
    this.miles = parseFloat(value);
  }

  onBlur(){
    console.log("too late.");
  }

}

