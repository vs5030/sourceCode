import { Component, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  @Output() dismiss = new EventEmitter();

  constructor(private el: ElementRef){}

  ngOnInit(){
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy(){
    this.el.nativeElement.remove();
  }
  onDismissClick(){
    this.dismiss.emit();
    console.log('dismiss');
  }
}
