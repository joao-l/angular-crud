import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { CoinService } from '../services/coin.service';

@Pipe({ name: 'image' })
export class ImagePipe implements PipeTransform {
  private coinsUrl = 'https://api.collectgram.com/v1/item/';

  constructor(private http: HttpClient) { }

  transform(itemId: string) {
    return this.http
      .get(`${this.coinsUrl}image/${itemId}`, {
        responseType: 'blob'
      })
      .switchMap(blob => {
        return Observable.create(observer => {
          const reader = new FileReader();
          reader.readAsDataURL(blob);
          reader.onloadend = function () {
            observer.next(reader.result);
          };
        });
      })
      .catch(
      (error: Response) => {
        return Observable.throw([]);
      });
  }
}
