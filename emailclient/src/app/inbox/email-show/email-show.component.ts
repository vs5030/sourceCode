import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailBody } from '../email-body';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrl: './email-show.component.css'
})
export class EmailShowComponent {

  emailBody!: EmailBody;

  constructor(private route: ActivatedRoute) {
      //to ensure emailBody is not undefined, grab value from snapshot
      this.emailBody = route.snapshot.data['emailBody'];
      this.route.data.subscribe(
      ({emailBody}) => {
        //console.log(value);
        this.emailBody = emailBody;
      }
    )
  }

  ngOnInit() {
    //console.log(this.emailBody);
    // this.route.params.pipe(
    //   switchMap(({id})=>{
    //     return this.emailService.getEmailContent(id);
    //   })
    // ).subscribe((emailBody)=>{
    //   this.emailBody = emailBody;
    // })

  }
}

