import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {

  @Input()
  fieldControl!: FormControl;
  @Input()
  cstmLabel!: string; 
  //@Input()
  //fieldType!: string; 

  showErrors(){
    return this.fieldControl.dirty && this.fieldControl.touched && this.fieldControl.errors;
  }

  getControlName(c: AbstractControl): string | null {
    const formGroup = c["_parent"].controls; 
    //console.log(formGroup);
    //console.log(Object.keys(formGroup).find(name => c === formGroup[name]));
    return Object.keys(formGroup).find(name => c === formGroup[name]) ?? null;
}

}
