import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Side } from '../../../../shared/index';

@Component({
  selector: 'app-side-detail',
  templateUrl: './side-detail.component.html',
  styleUrls: ['./side-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SideDetailComponent implements OnInit {
  @Input() sides: Side;

  constructor() { }

  ngOnInit() {
  }

}
