import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @HostListener("mouseover") mouseOver(){
    this.renderer.addClass(this.elRef.nativeElement,"open");
  }
  @HostListener("mouseleave") mouseLeave(){
    this.renderer.removeClass(this.elRef.nativeElement, "open");
  }

}
