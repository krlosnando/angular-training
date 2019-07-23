import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-services-assigment',
  templateUrl: './services-assigment.component.html',
  styleUrls: ['./services-assigment.component.css'],
  providers: [UsersService, CounterService]
})
export class ServicesAssigmentComponent implements OnInit{
  activeUsers: string[];
  inactiveUsers: string[];

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers = this.usersService.inactiveUsers;
  }
}
