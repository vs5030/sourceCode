import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrl: './email-show.component.css'
})
export class EmailShowComponent {

  @Input()
  id!: string;
  
}

