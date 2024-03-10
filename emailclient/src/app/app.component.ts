import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { __values } from 'tslib';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  signedin:boolean|null = null;
  //signedin$ : BehaviorSubject<boolean>;

  constructor(private authService: AuthService){
    //this.signedin$ = this.authService.signedin$;
  }

  ngOnInit(){
    this.authService.signedin$.subscribe((value)=> {
      this.signedin=value;
    });

    this.authService.checkSignedIn().subscribe(() => {});
  }
  
}
