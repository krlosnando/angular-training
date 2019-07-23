import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css',
  '../../../../styles/answer.css',]
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>(); //EventEmitter - TS generic type
  @Output('bpCreated') blueprintCreated = new EventEmitter<{blueprintName: string, blueprintContent: string}>(); //alias
  // newServerName = '';
  // newServerContent = '';
  //@ViewChild('selector') you can also access here component by @ViewChild(CockpitComponent)
  @ViewChild('serverContentInput') serverContentInput: ElementRef; 

  constructor() { }
  
  //ngOnInit - a lifecycle hook called when tha comp. is initialized 
  //More: ngOnChanges - bound input property changes, ngDoCheck - on every chanage detection, 
  //ngAfterContentInit, ngAfterContentChecked, ngAfterViewInit, ngAfterViewChecked
  ngOnInit() { 
  }

  onAddServer(nameInput : HTMLInputElement) {
    // this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent}); // will emit a new event of this type using EventEmitter
    this.serverCreated.emit({serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value}); // will emit a new event of this type using EventEmitter
  }

  onAddBlueprint(nameInput : HTMLInputElement) {
    // this.blueprintCreated.emit({blueprintName: this.newServerName, blueprintContent: this.newServerContent});
    this.blueprintCreated.emit({blueprintName: nameInput.value, blueprintContent: this.serverContentInput.nativeElement.value});
  }
}
