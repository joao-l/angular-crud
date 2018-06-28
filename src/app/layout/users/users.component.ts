import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { CompleterService, CompleterData } from 'ng2-completer';
import { User } from '../../shared/index';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [routerTransition()]
})
export class UsersComponent implements OnInit {
  users: User[];
  user: User = new User();
  displayDialog: boolean;
  selectedUser: User;
  newUser: boolean;
  dataService: CompleterData;
  searchUser: string;

  constructor(private userService: UserService, private completerService: CompleterService) { }

  ngOnInit() {
    this.onGetUsers();
  }

  onRowDblclick(event) {
    this.newUser = false;
    this.user = this.cloneUser(event.data);
    this.displayDialog = true;
  }

  findSelectedUserIndex(): number {
    return this.users.indexOf(this.selectedUser);
  }

  onHide() {
    this.users.length = 0;
    this.onGetUsers();
  }

  onGetUsers() {
    this.userService
      .getUsers()
      .subscribe((users) => {
        this.users = users;
        this.dataService = this.completerService.local(this.users, 'name', 'name');
      }, (error) => {
        console.log(error);
      });
  }

  cloneUser(c: User): User {
    let user = new User();

    for (let prop in c) {
      user[prop] = c[prop];
    }
    return user;
  }
}
