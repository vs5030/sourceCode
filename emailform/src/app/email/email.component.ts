import { Component } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrl: './email.component.css'
})
export class EmailComponent {
[x: string]: any;

  email: string = '';
  testEmail!: string;
  //test: string='a';
  onSubmit(){
    console.log(this.email);
  }

  constructor(){
    // setInterval( () => {
    //   this.email += 'a';

    //  }, 1000);
  //
  }
  // onTest(value:string){
  //   this.email = value;
  //   console.log(this.email);
  // }


}
