import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DateFormControl } from '../date-form-control';
import { SecurityFormControl } from '../security-form-control';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrl: './card-form.component.css'
})
export class CardFormComponent {

  constructor() {
   // console.log(this.cardForm.get('name'));
  }

  cardForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)
    ]
    ),
    cardNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16),
      Validators.pattern('[0-9]*')
    ]
    ),
    expiration: new DateFormControl('', [
      Validators.required,
      Validators.pattern(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/)
    ]
    ),
    security: new SecurityFormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3),
      Validators.min(100),
      Validators.max(999)  
    ]
    )

  });

  getControl(field: string) {
    return this.cardForm.get(field) as FormControl;
  }

  getFormGroup(field: string) {
    return this.cardForm.get(field) as FormGroup;
  }

  onSubmit(){
    console.log('Form has been submitted');
  }

  onReset(){
    this.cardForm.reset();
  }
}
