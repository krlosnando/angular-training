import { Component, OnInit } from '@angular/core';
import { Server } from 'selenium-webdriver/safari';

@Component({
  selector: 'app-success-alert',
  template: '<p class="message">Success, congratulations!</p>',
  styles: [`p.message {
    color: green;
}`]
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
