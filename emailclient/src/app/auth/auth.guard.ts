import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { map, skipWhile, take, tap } from 'rxjs';

export const authGuard: CanMatchFn = (route, segments) => {
  const router:Router = new Router();
  return inject(AuthService).signedin$.pipe(
    skipWhile(value => value===null),
    map(value => value!),
    take(1)
    // tap((value)=>{
    //   if (!value){
    //     router.navigateByUrl('/');
    //   }
    // })
  );

};
