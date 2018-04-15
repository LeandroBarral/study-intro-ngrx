import * as actions from '../../amadeus.actions';
import { AmadeusState } from '../../amadeus.reducers';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State {
  loaded: boolean;
  loading: boolean;
  hotels: Array<any>;
}

const initialState: State = {
  loaded: false,
  loading: false,
  hotels: []
};

export function reducer(
  state = initialState,
  action: actions.AmadeusActions
): State {
  switch (action.type) {
    case actions.Types.SEARCH_HOTEL_AIRPORT: {
      return {
        ...state,
        loading: true
      };
    }

    case actions.Types.SEARCH_HOTEL_AIRPORT_SUCCESS: {
      return {
        loaded: true,
        loading: false,
        hotels: action.payload.results || []
      };
    }

    case actions.Types.SEARCH_HOTEL_AIRPORT_ERROR: {
      return {
        ...state,
        loaded: false,
        loading: false,
        hotels: []
      };
    }

    default: {
      return state;
    }
  }
}

export const getAmadeusState = createFeatureSelector<AmadeusState>('amadeus');

export const getState = createSelector(
  getAmadeusState,
  state => state.hotelList
);

export const getLoaded = createSelector(getState, state => state.loaded);

export const getLoading = createSelector(getState, state => state.loading);

export const getHotels = createSelector(getState, state => state.hotels);
