import { Input } from "@angular/core";
import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() title= '';
  @Input() userName='';
  @Input() imageUrl='';
  @Input() content='';

}
