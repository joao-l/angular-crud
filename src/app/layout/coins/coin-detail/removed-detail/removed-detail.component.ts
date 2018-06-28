import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Removed } from '../../../../shared/index';

@Component({
  selector: 'app-removed-detail',
  templateUrl: './removed-detail.component.html',
  styleUrls: ['./removed-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RemovedDetailComponent implements OnInit {
  @Input() removed: Removed;

  constructor() { }

  ngOnInit() {
  }

}
