import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Coin } from '../../../shared/index';

@Component({
  selector: 'app-coin-detail',
  templateUrl: './coin-detail.component.html',
  styleUrls: ['./coin-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CoinDetailComponent implements OnInit {
  @Input() coin: Coin;

  constructor() { }

  ngOnInit() {
  }

}
