import { Component } from '@angular/core';
import { EmailService } from '../email.service';



@Component({
  selector: 'app-email-index',
  templateUrl: './email-index.component.html',
  styleUrl: './email-index.component.css'
})
export class EmailIndexComponent {

  emails: {
    id: string;
    subject: string;
    from: string;
  }[] = [];

  constructor(private emailService: EmailService){
  }

  ngOnInit(){
   this.emailService.getEmails().subscribe((value)=>{
    console.log(value);
    this.emails = value;
  })
  }
}
