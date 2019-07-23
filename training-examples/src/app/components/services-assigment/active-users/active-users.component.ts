import { Component, Input } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html'
})
export class ActiveUsersComponent {
  @Input() users: string[];

  constructor(private usersService: UsersService) {}

  onSetToInactive(id: number) {
    this.usersService.inactiveUser(id);
  }
}
