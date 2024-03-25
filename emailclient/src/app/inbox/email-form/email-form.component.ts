import { Component, Input } from '@angular/core';
import { EmailBody } from '../email-body';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrl: './email-form.component.css'
})
export class EmailFormComponent {

@Input() emailBody! : EmailBody;
emailForm! : FormGroup;

constructor(){}

ngOnInit(){
  const {to, from, subject, text} = this.emailBody;
  this.emailForm = new FormGroup({
    to: new FormControl(to),
    from: new FormControl(from),
    subject: new FormControl(subject),
    text: new FormControl(text)

  })

}

  getFormControl(name: string){
    return this.emailForm.get(name) as FormControl
  }
}
