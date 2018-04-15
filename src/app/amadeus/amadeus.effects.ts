import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/skip';

import * as actions from './amadeus.actions';
import { AmadeusService } from './amadeus.service';

@Injectable()
export class AmadeusEffects {
  @Effect()
  search$: Observable<Action> = this.actions$
    .ofType(actions.Types.SEARCH_HOTEL_AIRPORT)
    .map((action: actions.SearchHotelAirport) => action.payload)
    .switchMap(payload => {
      const nextSearch$ = this.actions$
        .ofType(actions.Types.SEARCH_HOTEL_AIRPORT)
        .skip(1);

      return this.amadeusService
        .getHotelsSearchAirport(
          payload.iataAirportCode,
          payload.checkIn,
          payload.checkOut,
          payload.currency,
          payload.lang
        )
        .takeUntil(nextSearch$)
        .map((res: any) => new actions.SearchHotelAirportSuccess(res))
        .catch(err => Observable.of(new actions.SearchHotelAirportError(err)));
    });

  @Effect()
  getDetail$: Observable<Action> = this.actions$
    .ofType(actions.Types.GET_HOTEL)
    .map((action: actions.GetHotel) => action.payload)
    .switchMap(payload => {
      const nextRequest$ = this.actions$
        .ofType(actions.Types.GET_HOTEL)
        .skip(1);

      return this.amadeusService
        .getHotelDetail(
          payload.propertyCode,
          payload.checkIn,
          payload.checkOut,
          payload.currency,
          payload.lang
        )
        .takeUntil(nextRequest$)
        .map((res: any) => new actions.GetHotelSuccess(res))
        .catch(err => Observable.of(new actions.GetHotelError(err)));
    });

  constructor(
    private actions$: Actions,
    private amadeusService: AmadeusService
  ) {}
}
