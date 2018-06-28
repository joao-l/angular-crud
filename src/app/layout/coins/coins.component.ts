import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { routerTransition } from '../../router.animations';
import { CoinService, SelectItem } from './../../shared';
import { Coin } from './../../shared/models/coin.model';
import { LazyLoadEvent } from 'primeng/components/common/lazyloadevent';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.scss'],
  animations: [routerTransition()]
})
export class CoinsComponent implements OnInit {
  coins: Array<Coin>;
  totalRecords;
  loading;
  coin: Coin = new Coin();
  newCoin: boolean;
  selectedCoin: Coin;
  displayDialog: boolean;
  isSearch: boolean;
  terms: string;
  publicado: boolean;

  constructor(private coinService: CoinService, private router: Router) { }

  ngOnInit() {
    this.publicado = true;
    this.terms = '';
    this.isSearch = false;
    this.loading = true;
    this.onGetCoins();
  }

  onRowDblclick(event) {
    this.newCoin = false;
    this.coin = this.cloneCoin(event.data);

    let id = this.coin._id ? this.coin._id : null;
    this.router.navigate([`/coins/edit/${this.coin._id}`]);
  }

  onHide() {
    this.coins.length = 0;
    this.onGetCoins();
  }

  findSelectedCoinIndex(): number {
    return this.coins.indexOf(this.selectedCoin);
  }

  limparBusca() {
    this.terms = '';
    this.isSearch = false;
    this.onGetCoins();
  }

  buscarItems() {
    if (this.terms) {
      this.coinService
        .searchCoins(this.terms)
        .subscribe((res) => {
          this.coins = res['items'];
          this.isSearch = this.coins.length > 0 ? true : false;
        }, (error) => {
          console.log(error);
        });
    }
  }

  loadData(event: LazyLoadEvent) {
    const page = (event.first + event.rows) / 10;
    this.loading = true;

    if (!this.isSearch) {
      setTimeout(() => {
        this.loading = false;
        this.coinService
          .getCoins(page.toString())
          .subscribe((res) => {
            this.coins = res['items'];
          }, (error) => {
            console.log(error);
          });
      }, 2000);
    } else {
      setTimeout(() => {
        this.loading = false;
        this.coinService
          .searchCoins(this.terms, page.toString())
          .subscribe((res) => {
            this.totalRecords = res['total'];
            this.coins = res['items'];
          }, (error) => {
            console.log(error);
          });
      }, 2000);
    }
  }

  onGetCoins() {
    this.coinService
      .getCoins()
      .subscribe((res) => {
        this.totalRecords = res['total'];
        this.coins = res['items'];
      }, (error) => {
        console.log(error);
      });
  }

  cloneCoin(c: Coin): Coin {
    let coin = new Coin();

    for (let prop in c) {
      coin[prop] = c[prop];
    }
    return coin;
  }
}
