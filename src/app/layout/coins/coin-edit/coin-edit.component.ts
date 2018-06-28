import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { routerTransition } from '../../../router.animations';
import { Coin, CoinService } from '../../../shared/index';

@Component({
  selector: 'app-coin-edit',
  templateUrl: './coin-edit.component.html',
  styleUrls: ['./coin-edit.component.scss'],
  animations: [routerTransition()],
  encapsulation: ViewEncapsulation.None
})
export class CoinEditComponent implements OnInit {
  @Input() coin: Coin;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private coinService: CoinService,
  ) {
    this.coin = new Coin();
  }

  ngOnInit() {
    this.getCoin();
  }

  getCoin(): void {
    this.coinService.getCoinById(this.route.snapshot.paramMap.get('id')).subscribe(coin => this.coin = coin);
  }
}
