import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Coin } from '../../../../shared/index';

@Component({
  selector: 'app-general-detail',
  templateUrl: './general-detail.component.html',
  styleUrls: ['./general-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GeneralDetailComponent implements OnInit {
  @Input() coin: Coin;

  constructor() { }

  ngOnInit() {
  }

}
