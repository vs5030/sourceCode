import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {

  @Input() label!: string;
  @Input() control!: FormControl ;

  showErrors(){
    const { dirty, touched, errors } = this.control;
    //console.log(this.control.errors);
    return dirty && touched && errors;

  }
}
