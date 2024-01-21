import { Component, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

@Output() close = new EventEmitter;

constructor(private el: ElementRef){
  //console.log(this.el.nativeElement);
}


ngOnInit(){
  document.body.appendChild(this.el.nativeElement);
}

ngOnDestroy(){
  this.el.nativeElement.remove();
}

closeModal(){
  this.close.emit();
}

}
