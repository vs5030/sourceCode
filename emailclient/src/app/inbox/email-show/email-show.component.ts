import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailBody } from '../email-body';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrl: './email-show.component.css'
})
export class EmailShowComponent {

  emailBody!: EmailBody;

  constructor(private route: ActivatedRoute, router: Router) {
    //to ensure emailBody is not undefined, grab value from snapshot
    this.emailBody = route.snapshot.data['emailBody'];
    this.route.data.subscribe(
      ({ emailBody }) => {
        if (emailBody.status) {
          router.navigateByUrl('/inbox/not-found')
        }
        else {
          this.emailBody = emailBody;
        }
      }
    )
  }

  ngOnInit() {
    //console.log(this.emailBody);
    // this.route.params.pipe(

    //   switchMap(({emailBodyId})=>{
    //     //console.log(this.route.params);
    //     return this.emailService.getEmailContent(emailBodyId);
    //   })
    // ).subscribe((emailBody: EmailBody)=>{
    //   this.emailBody = emailBody;
    //   //console.log(this.emailBody)
    // })

  }
}
