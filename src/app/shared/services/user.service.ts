import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { AuthService } from '../index';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';

@Injectable()
export class UserService {
  private userUrl = 'https://api.collectgram.com/v1/user/';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http
      .get(this.userUrl)
      .map((response: Response) => {
        const data: Array<User> = response ? response['items'] : '';
        return data;
      })
      .catch(
      (error: Response) => {
        return Observable.throw(error);
      });
  }

  getUserIdByEmail(userEmail: string): Observable<any> {
    return this.http.post(`${this.userUrl}find`, { email: userEmail });
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.userUrl, user);
  }

  updateUser(user: User): Observable<any> {
    return this.http.put(`${this.userUrl}${user._id}`, this.cleanUserForUpdate(user));
  }

  private cleanUserForUpdate(user: User): User {
    let obj: User = user;

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

      if (obj.password) {
        delete obj['password'];
      }

      return obj;
    }
    return;
  }
}
