import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isActive: boolean;
  showMenu: string;

  constructor(private router: Router) {
    this.showMenu = '';
    this.isActive = false;
  }

  eventCalled() {
    this.isActive = !this.isActive;
  }

  addExpandClassUser(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }
  addExpandClassItems(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }

  gotoCoins() {
    this.router.navigate(['/coins']);
  }

  gotoUsers() {
    this.addExpandClassItems('');
    this.router.navigate(['/users']);
  }
}
