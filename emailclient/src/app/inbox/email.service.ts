import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailBody } from './email-body';

export interface EmailSummary{
  id: string;
  subject: string;
  from: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  rootUrl = 'https://api.angular-email.com';

  constructor(private http: HttpClient) { }

  getEmails() {
   return this.http.get<EmailSummary[]>(this.rootUrl + '/emails');
  }

  getEmailContent(id:string){
    return this.http.get<EmailBody>(this.rootUrl + '/emails/' + id );
  }
}
