import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-assigment-3',
  templateUrl: './basic-assigment-3.component.html',
  styleUrls: [
    '../../../styles/answer.css',
    './basic-assigment-3.component.css'
  ]
})
export class BasicAssigment3Component implements OnInit {
  displayDetails: boolean;
  displayDetailsButtonLabel = 'Display Details';
  secretPassword = 'Secret Password = tuna';
  logs = [];

  constructor() {
    this.displayDetails = false;
    console.log(this.logs);
  }

  ngOnInit() {
  }

  onDisplayDetails() {
    this.displayDetails = !this.displayDetails;

    if (this.displayDetails) {
      this.logs.push(this.logLine());
      this.displayDetailsButtonLabel = 'Hide Details';
    } else {
      this.displayDetailsButtonLabel = 'Display Details';
    }
  }

  displayTime() {
    let str = '';

    const currentTime = new Date();
    const hours = currentTime.getHours();
    let minutes: number | string = currentTime.getMinutes();
    let seconds: number | string = currentTime.getSeconds();

    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;

    str += hours + ':' + minutes + ':' + seconds + ' ';
    if (hours > 11) {
        str += 'PM';
    } else {
        str += 'AM';
    }
    return str;
}

  logLine(): string {
    return `${this.displayTime()} ${this.secretPassword}`;
  }

  ifLogsLength(length: number) {
    return this.logs.length >= length;
  }

  getColor() {
      return this.ifLogsLength(5) ? 'blue' : '';
  }

}
