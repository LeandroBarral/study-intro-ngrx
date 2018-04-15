import { Action } from '@ngrx/store';

export enum Types {
  SEARCH_HOTEL_AIRPORT = '[AMADEUS] Search Hotel Airport',
  SEARCH_HOTEL_AIRPORT_SUCCESS = '[AMADEUS] Search Hotel Airport Success',
  SEARCH_HOTEL_AIRPORT_ERROR = '[AMADEUS] Search Hotel Airport Error'
}

export class SearchHotelAirport implements Action {
  readonly type = Types.SEARCH_HOTEL_AIRPORT;

  constructor(
    public payload: {
      iataAirportCode?: string,
      checkIn?: Date,
      checkOut?: Date,
      lang?: string
    }
  ) {}
}

export class SearchHotelAirportSuccess implements Action {
  readonly type = Types.SEARCH_HOTEL_AIRPORT_SUCCESS;

  constructor(public payload: Array<any>) {}
}

export class SearchHotelAirportError implements Action {
  readonly type = Types.SEARCH_HOTEL_AIRPORT_ERROR;

  constructor(public payload: any) {}
}

export type AmadeusActions =
  | SearchHotelAirport
  | SearchHotelAirportSuccess
  | SearchHotelAirportError;
