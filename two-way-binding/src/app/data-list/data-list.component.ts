import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {
  @Input() title: string = 'Data List';
  @Input() data: string[] = [];
  @Output() loadData: EventEmitter<Event> = new EventEmitter();

  @Input() onLoadData: () => Observable<string[]>;

  constructor() { }

  ngOnInit() {
    this.loadData.subscribe((data) => {
      alert(data);
    });

    //this.data = this.onLoadData();
  }

  onLoad(event: Event) {
    if (this.onLoadData) {
      this.onLoadData().subscribe(data => {
        this.data = data;
      });
    } else {
      this.loadData.emit(event);
    }
  }
}
