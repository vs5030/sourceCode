import { Component, Input } from '@angular/core';
import { EmailBody } from '../email-body';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrl: './email-create.component.css'
})
export class EmailCreateComponent {

   showModal = false;
   emailBody!: EmailBody;

   constructor(){
    this.emailBody = {
      to: '',
      from: 'test10@angular-email.com',
      subject: '',
      text: '',
      html:'',
      id: ''
    }

   }

}
