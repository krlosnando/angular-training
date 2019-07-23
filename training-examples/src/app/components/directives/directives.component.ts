import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4, 6];
  onlyOdd = false;
  value= 5;

  constructor() { }

  ngOnInit() {
  }



  /* 
  Directives:
  - Attrbute d. - affects only the element they are added to 
  - Structural d. - affects DOM, view container
  */
}
