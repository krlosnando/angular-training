import {
	AfterContentChecked,
	AfterContentInit, AfterViewChecked,
	AfterViewInit,
	Component, ContentChild,
	DoCheck, ElementRef,
	Input,
	OnChanges, OnDestroy,
	OnInit,
	SimpleChanges, ViewChild
} from '@angular/core';

@Component({
	selector: 'app-server-element',
	templateUrl: './server-element.component.html',
	styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
	
	@Input('srvElement') element: { type: string, name: string, content: string };
	@Input() name: string;
	
	@ViewChild('heading', { static: true }) header: ElementRef;
	@ContentChild('contentParagraph', { static: true }) parahraph: ElementRef;
	
	constructor() {
		console.log('constructor');
	}
	
	ngOnChanges(changes: SimpleChanges) {
		console.log('ngOnChanges');
		console.log(changes);
	}
	
	ngOnInit() {
		console.log('ngOnInit');
		console.log('Text content - ' + this.header.nativeElement.textContent);
		console.log('Text content p - ' + this.parahraph.nativeElement.textContent);
	}
	
	ngDoCheck(): void {
		console.log('ngDoCheck');
		console.log('Text content - ' + this.header.nativeElement.textContent);
		console.log('Text content p - ' + this.parahraph.nativeElement.textContent);
	}
	
	ngAfterContentInit(): void {
		console.log('ngAfterContentInit');
		console.log('Text content - ' + this.header.nativeElement.textContent);
		console.log('Text content p - ' + this.parahraph.nativeElement.textContent);
	}
	
	ngAfterContentChecked(): void {
		console.log('ngAfterContentChecked');
		console.log('Text content - ' + this.header.nativeElement.textContent);
		console.log('Text content p - ' + this.parahraph.nativeElement.textContent);
	}
	
	ngAfterViewInit(): void {
		console.log('ngAfterViewInit');
		console.log('Text content - ' + this.header.nativeElement.textContent);
		console.log('Text content p - ' + this.parahraph.nativeElement.textContent);
	}
	
	ngAfterViewChecked(): void {
		console.log('ngAfterViewChecked');
		console.log('Text content - ' + this.header.nativeElement.textContent);
		console.log('Text content p - ' + this.parahraph.nativeElement.textContent);
	}
	
	ngOnDestroy(): void {
		console.info('ngOnDestroy');
		console.log('Text content - ' + this.header.nativeElement.textContent);
		console.log('Text content p - ' + this.parahraph.nativeElement.textContent);
	}
	
}
