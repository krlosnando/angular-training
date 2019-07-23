import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-assigment-2',
  templateUrl: './basic-assigment-2.component.html',
  styleUrls: ['../../../styles/answer.css']
})
export class BasicAssigment2Component implements OnInit {
  username = 'TestName';
  message = '';

  constructor() {
  }

  onUsernameInput(event: Event) {
    this.username = (<HTMLInputElement>event.target).value;
  }

  usernameIsEmpty(): boolean {
    return (this.username.length === 0 || !this.username.trim());
  }

  onResetPassword() {
    this.message = `Password of the user ${this.username} is reset. Go to another form to set a new one`;
  }

  ngOnInit() {
    
  }

}
