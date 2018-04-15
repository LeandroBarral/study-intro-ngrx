import { Injectable, Injector } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthenticationHttpInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.indexOf(environment.API.AUTHENTICATION.BASE_URL) > -1) {
      console.log(':: AuthenticationHttpInterceptor ::');
      if (
        req.url.indexOf(
          `${environment.API.AUTHENTICATION.BASE_URL}/${
            environment.API.AUTHENTICATION.SERVICES.ACCOUNT.SIGN_IN
          }`
        ) > -1
      ) {
        // console.log('req.body', req.body);
        // console.log('req.body.username', req.body.username);
        if (req.body.username === 'test' && req.body.password === 'test') {
          // console.log('authenticated');
          return Observable.of(
            new HttpResponse({
              status: 200,
              body: {
                user: {
                  name: 'Test TechTalk',
                  email: 'test@techtalk.com'
                },
                user_token:
                  // tslint:disable-next-line:max-line-length
                  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0QHRlY2h0YWxrLmNvbSIsImp0aSI6IjAzOWZkYjMwLTJjNWQtNDkyOS1iZTc1LTg0YWIwYWU3OGJmNiIsIm5hbWVpZGVudGlmaWVyIjoiMGVhOTg0ZTctNzM1Zi00MWU3LWMwMmQtMDhkNTkwMGIxMGY5IiwiZXhwIjoxNTIyMDM2NjE5LCJpc3MiOiJsb2NhbGhvc3QiLCJhdWQiOiJsb2NhbGhvc3QifQ.H5Etfq-NZc6scnc4SXVGBrGNwCb17YUqMdtX0s9xj6I'
              }
            })
          );
        } else {
          // console.log('NOT authenticated');
          return Observable.throw(
            new HttpResponse({
              status: 401,
              statusText: 'Usuario/Senha inválidos'
            })
          );
        }
      }
    }

    // send the newly created request
    return next.handle(req).catch((error, caught) => {
      // intercept the respons error and displace it to the console
      console.log('Error Occurred');
      console.log(error);
      // return the error to the method that called it
      return Observable.throw(error);
    }) as any;
  }
}

export const authenticationHttpInterceptorFactory = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthenticationHttpInterceptor,
  multi: true
};
