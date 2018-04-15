import { Action } from '@ngrx/store';

export enum Types {
  SEARCH_HOTEL_AIRPORT = '[AMADEUS] Search Hotel Airport',
  SEARCH_HOTEL_AIRPORT_SUCCESS = '[AMADEUS] Search Hotel Airport Success',
  SEARCH_HOTEL_AIRPORT_ERROR = '[AMADEUS] Search Hotel Airport Error',
  GET_HOTEL = '[AMADEUS] Get Hotel',
  GET_HOTEL_SUCCESS = '[AMADEUS] Get Hotel Success',
  GET_HOTEL_ERROR = '[AMADEUS] Get Hotel Error'
}

export class SearchHotelAirport implements Action {
  readonly type = Types.SEARCH_HOTEL_AIRPORT;

  constructor(
    public payload: {
      iataAirportCode?: string;
      checkIn?: Date;
      checkOut?: Date;
      currency?: string;
      lang?: string;
    }
  ) {}
}

export class SearchHotelAirportSuccess implements Action {
  readonly type = Types.SEARCH_HOTEL_AIRPORT_SUCCESS;

  constructor(public payload: any) {}
}

export class SearchHotelAirportError implements Action {
  readonly type = Types.SEARCH_HOTEL_AIRPORT_ERROR;

  constructor(public payload: any) {}
}

export class GetHotel implements Action {
  readonly type = Types.GET_HOTEL;

  constructor(
    public payload: {
      propertyCode: string;
      checkIn?: Date;
      checkOut?: Date;
      currency?: string;
      lang?: string;
    }
  ) {}
}

export class GetHotelSuccess implements Action {
  readonly type = Types.GET_HOTEL_SUCCESS;

  constructor(public payload: any) {}
}

export class GetHotelError implements Action {
  readonly type = Types.GET_HOTEL_ERROR;

  constructor(public payload: any) {}
}

export type AmadeusActions =
  | SearchHotelAirport
  | SearchHotelAirportSuccess
  | SearchHotelAirportError
  | GetHotel
  | GetHotelSuccess
  | GetHotelError;
