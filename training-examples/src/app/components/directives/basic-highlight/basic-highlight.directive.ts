import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
    constructor(private elementRef: ElementRef){}
    // thanks to "private", which is TS shortcut in this case we will have value assign to the property (85, 4:00)

    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'greenyellow';
    }
}