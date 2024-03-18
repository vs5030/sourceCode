import { Injectable, inject } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, ResolveFn, Router, RouterStateSnapshot } from '@angular/router';
import { EmailBody } from './email-body';
import { EmailService } from './email.service';
import { switchMap, pipe } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
export const EmailResolverService: ResolveFn<EmailBody> = (

  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot

) => {
  //console.log(route.params['emailBodyId']);
  return inject(EmailService).getEmailContent(route.params['emailBodyId']);
}
