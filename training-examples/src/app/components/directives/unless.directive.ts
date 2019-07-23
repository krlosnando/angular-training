import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
// unless - directive is oposite of ngIf 

  @Input() set appUnless(condition: boolean) {
    // still a property, but with setter,
    // the name should be the same as selector
    if(!condition){
      this.vcRef.createEmbeddedView(this.templateRef)
    } else {
      this.vcRef.clear();
    }
  };

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
