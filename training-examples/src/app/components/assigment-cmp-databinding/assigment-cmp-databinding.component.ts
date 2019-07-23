import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assigment-cmp-databinding',
  templateUrl: './assigment-cmp-databinding.component.html',
  styleUrls: ['./assigment-cmp-databinding.component.css']
})
export class AssigmentCmpDatabindingComponent implements OnInit {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  constructor() { }

  ngOnInit() {
  }

  onIntervalFired(firedNumber: number) {
    if(firedNumber % 2 === 0){
      this.evenNumbers.push(firedNumber);
    }else{
      this.oddNumbers.push(firedNumber);
    }
  }
}
