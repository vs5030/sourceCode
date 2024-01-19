import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCstmNgFor]'
})
export class CstmNgForDirective {
  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  @Input('appCstmNgFor') set render(times: number){
  this.viewContainer.clear();
  for (let i=0; i < times; i++ ){
    this.viewContainer.createEmbeddedView(this.templateRef,{
      index: i
    });
  }

  

  }

}

