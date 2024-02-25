import { Directive, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import { filter, map } from 'rxjs/operators';

@Directive({
  selector: '[appCstmHighlight]'
})
export class CstmHighlightDirective {
  val = 0;
  constructor(private el: ElementRef, private controlName: NgControl) {


    // console.log(this.el);
    // console.log(this.controlName);
  }

  ngOnInit() {
    // console.log(this.controlName.control?.parent?.value);
    this.controlName.control?.parent?.valueChanges.pipe(
      map(({ a, b, answer }) => {
        this.val = Math.abs((a + b - answer) / (a + b));
      })
    ).subscribe(() => {
      if (this.val < 0.2) {
        this.el.nativeElement.classList.add('close');
      }
      // else if (this.val > 0.2 ){
      //   this.el.nativeElement.classList.add('incorrect');
      // }
      // else if (this.controlName.control?.parent?.valid){
      //  this.el.nativeElement.classList.add('correct');
      // }
      else {
        this.el.nativeElement.classList.remove('close');
        // this.el.nativeElement.classList.remove('correct');
        // this.el.nativeElement.classList.remove('incorrect');
      }
    });
  }

}
