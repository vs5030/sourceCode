import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
root: any;

constructor(private el: ElementRef){
  //console.log(this.el.nativeElement);
}


ngOnInit(){
  document.body.appendChild(this.el.nativeElement);
}

ngOnDestroy(){
  this.el.nativeElement.remove();
}

}
