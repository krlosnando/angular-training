import { 
  Component, 
  OnInit, 
  Input, 
  OnChanges, 
  SimpleChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit, 
  AfterViewChecked, 
  OnDestroy, 
  ViewChild,
  ElementRef,
  ContentChild
 } from '@angular/core';
// import { ViewEncapsulation } from '@angular/compiler/src/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation: ViewEncapsulation.None, 
  // Emulated - default 
  // None - means that even if you put style in this component, then will be use in all places (application wide)
  // Native -  shadow DOM technology, only in browsers that support it, allows hidden DOM trees to be attached to elements in the regular DOM tree
})
export class ServerElementComponent implements 
OnInit, 
OnChanges, 
DoCheck, 
AfterContentInit, 
AfterContentChecked, 
AfterViewInit, 
AfterViewChecked, 
OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};
  // alias used, which will be working outside of this component
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() { }

  ngOnInit() {
    console.log(this.header.nativeElement.textContent); //empty, see ngAfterViewInit
    console.log('Text Content pf paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngOnChanges(changes : SimpleChanges) {  
    console.log(changes);
  }

  ngDoCheck(){
    console.log("ngDoCheck called")
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit called")
    console.log('Text Content pf paragraph: ' + this.paragraph.nativeElement.textContent);    
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked called")
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit called")
    console.log("Text content: " + this.header.nativeElement.textContent); //accessed to the content
    
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked called")
  }

  ngOnDestroy(){
    console.log("element destroyed")
  }
}
