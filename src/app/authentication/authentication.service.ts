import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import * as moment from 'moment';
import { map } from 'rxjs/operator/map';

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  postSignIn(
    username: string,
    password: string
  ): Observable<
    | {
        user: {
          name: string;
          email: string;
        };
        user_token: string;
      }
    | {
        message: string;
      }
  > {
    const env = environment.API.AUTHENTICATION;
    const apiPath = `${env.BASE_URL}/${env.SERVICES.ACCOUNT.SIGN_IN}`;
    const body = {
      username: username,
      password: password
    };

    if (!environment.production) {
      console.group(':: AuthenticationService ::');
      console.log('apiPath', apiPath);
      console.log('body', body);
      console.groupEnd();
    }

    return this.http.post<any>(apiPath, body);
  }
}
