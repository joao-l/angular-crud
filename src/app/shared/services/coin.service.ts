import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Coin, Publication } from '../models/coin.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';

@Injectable()
export class CoinService {
  private coinsUrl = 'https://api.collectgram.com/v1/item/';

  constructor(private http: HttpClient) { }

  searchCoins(terms, page?: string) {
    return this.http
      .post(`${this.coinsUrl}search`, {
        terms: terms || ''
      }, {
          headers: new HttpHeaders({ 'page': page || '1' })
        });
  }

  getCoins(page?, perPage?: string) {
    return this.http
      .get(`${this.coinsUrl}raw`, {
        headers: new HttpHeaders({ 'per-page': perPage || '10' })
          .append('page', page || '1')
      })
      .map((response: Response) => {
        const data = response ? response : '';
        return data;
      })
      .catch(
        (error: Response) => {
          return Observable.throw(error);
        });
  }

  getCoinById(id: string): Observable<Coin> {
    return this.http.get<Coin>(`${this.coinsUrl}${id}/moreInfo`);
  }

  updateCoin(coin: Coin): Observable<any> {
    return this.http.put(`${this.coinsUrl}${coin._id}`, this.cleanCoinForUpdate(coin));
  }

  updateActiveCoin(coin: Coin) {
    const activeCoin = {
      publication: { isPublished: coin.publication.isPublished },
      removed: { isRemoved: !coin.publication.isPublished }
    };

    return this.http.put(`${this.coinsUrl}${coin._id}`, activeCoin);
  }

  private cleanCoinForUpdate(coin: Coin): Coin {
    let obj: Coin = coin;

    if (obj) {
      for (let propName in obj) {
        if (
          obj[propName] === null || obj[propName] === undefined) {
          delete obj[propName];
        }
      }

      if (obj._id) {
        delete obj['_id'];
      }

      return obj;
    }
    return;
  }
}
