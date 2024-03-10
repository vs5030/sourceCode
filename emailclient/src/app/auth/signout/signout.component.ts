import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrl: './signout.component.css'
})
export class SignoutComponent {

  constructor(private authService: AuthService,
              private router: Router){

  }
  ngOnInit(){
    this.authService.signout().subscribe(()=>{
      //console.log(value);
      console.log('user has signed out');
      this.router.navigateByUrl('/');
    });
  }

}
