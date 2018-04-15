import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import * as moment from 'moment';
import { map } from 'rxjs/operator/map';

@Injectable()
export class AmadeusService {
  constructor(private http: HttpClient) {}

  getHotelsSearchAirport(
    iataAirportCode: string = 'SDU',
    checkIn: Date = null,
    checkOut: Date = null,
    currency: string = 'BRL',
    lang: string = 'PT'
  ): Observable<Array<any>> {
    const env = environment.API.AMADEUS;
    const apiPath = `${env.BASE_URL}/${env.SERVICES.HOTEL.AIRPORT_SEARCH}`;

    let params = new HttpParams();
    params = params.set('apikey', env.API_KEY);
    params = params.set('location', iataAirportCode);
    checkIn = checkIn || new Date(moment.now());
    checkOut =
      checkOut ||
      moment()
        .add(1, 'day')
        .toDate();
    params = params.set('check_in', moment(checkIn).format('YYYY-MM-DD'));
    params = params.set('check_out', moment(checkOut).format('YYYY-MM-DD'));
    params = params.set('currency', currency);
    params = params.set('lang', lang);

    console.groupCollapsed(':: AmadeusService ::', apiPath);
    console.log('params', params);
    console.groupEnd();

    return this.http.get<any>(apiPath, { params: params });
  }

  getHotelDetail(
    propertyCode: string,
    checkIn: Date = null,
    checkOut: Date = null,
    currency: string = 'BRL',
    lang: string = 'PT'
  ): Observable<Array<any>> {
    const env = environment.API.AMADEUS;
    const apiPath = `${
      env.BASE_URL
    }/${env.SERVICES.HOTEL.AIRPORT_DETAIL.replace(':property_code', propertyCode)}`;

    let params = new HttpParams();
    params = params.set('apikey', env.API_KEY);
    checkIn = checkIn || new Date(moment.now());
    checkOut =
      checkOut ||
      moment()
        .add(1, 'day')
        .toDate();
    params = params.set('check_in', moment(checkIn).format('YYYY-MM-DD'));
    params = params.set('check_out', moment(checkOut).format('YYYY-MM-DD'));
    params = params.set('currency', currency);
    params = params.set('lang', lang);

    console.groupCollapsed(':: AmadeusService ::', apiPath);
    console.log('params', params);
    console.groupEnd();

    return this.http.get<any>(apiPath, { params: params });
  }
}
