import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css'
})
export class AccordionComponent {
@Input() chItems = [] as any;
openItemIndex = 0;

onClick(index: number){
  if (this.openItemIndex === index) {
    this.openItemIndex = -1;
  }
  else {
    this.openItemIndex = index;
  }
}

}
