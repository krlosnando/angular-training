import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor: string = 'transparent';
  // @Input() highlightColor: string = 'blue';
  @Input('appBetterHighlight') highlightColor: string = 'blue';
  // @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;
  @HostBinding('style.backgroundColor') backgroundColor: string;
  // () - to which property of the emelent you want to bind
  // Camel case is important here as we accessing DOM property which does not know dashes

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor; // to prevent white at the beginning, which happens as property is not set yet. 
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue') 
    // Renderer in not wrong usage, but not more needed in this example 
    this.backgroundColor = this.highlightColor;   
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent')  
    this.backgroundColor = this.defaultColor;  
  }
}
