import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCstmNgClass]'
})
export class CstmNgClassDirective {
  //@Input() backgroundColor : String | undefined;


  constructor(private element: ElementRef) { 
    //console.log('too late');
    //setTimeout(() => {
    //  this.element.nativeElement.style.backgroundColor = this.backgroundColor;
    //}, 50);

  }

 /* @Input('appCstmNgClass') set backgroundColor(color:string){
    this.element.nativeElement.style.backgroundColor = color;
  }*/ 

  @Input('appCstmNgClass') set classNames(classObj: any){
    //console.log(classObj);
    for (let key in classObj){
      if(classObj[key]){
        this.element.nativeElement.classList.add(key);
      }
      else {
        this.element.nativeElement.classList.remove(key);

      }
    }
  }

}
