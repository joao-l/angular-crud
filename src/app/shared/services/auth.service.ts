import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthService {
  private userUrl = 'https://api.collectgram.com/v1/user/';
  private authUrl = 'https://api.collectgram.com/v1/auth/local/grant';

  constructor(private http: HttpClient) { }

  signinUser(user: User) {
    const userAuth = { username_email: user.email, password: user.password };

    return this.http
      .post(this.authUrl, userAuth, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) })
      .map((res: Response) => {
        return { tokenClient: this.generateClientToken(res), token: res };
      })
      .do((tokenData) => {
        localStorage.setItem('token', tokenData.tokenClient);
      });
  }

  getStorageToken() {
    return localStorage.getItem('token');
  }

  generateClientToken(terms) {
    return terms ? `${terms['token_type']} ${terms['client_id']}.${terms['access_token']}` : '';
  }
}
