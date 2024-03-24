import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { EmailBody } from './email-body';
import { EmailService } from './email.service';
import { catchError, of } from 'rxjs';

// @Injectable({
//    providedIn: 'root'
// })
export const EmailResolverService: ResolveFn<EmailBody> = (

  route: ActivatedRouteSnapshot
  //state: RouterStateSnapshot
) => {

  const { emailBodyId } = route.params;
  return inject(EmailService).getEmailContent(emailBodyId)
    .pipe(
      catchError((err) => {
        return of(err);
      })
    )
    ;

}