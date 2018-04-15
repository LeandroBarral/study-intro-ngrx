import * as actions from '../../amadeus.actions';
import { AmadeusState } from '../../amadeus.reducers';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State {
  loaded: boolean;
  loading: boolean;
  hotel?: any;
  errorMessage?: string;
}

const initialState: State = {
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: actions.AmadeusActions
): State {
  switch (action.type) {
    case actions.Types.GET_HOTEL: {
      return {
        ...state,
        loading: true,
        errorMessage: null
      };
    }

    case actions.Types.GET_HOTEL_SUCCESS: {
      return {
        loaded: true,
        loading: false,
        hotel: action.payload,
        errorMessage: null
      };
    }

    case actions.Types.SEARCH_HOTEL_AIRPORT_ERROR: {
      return {
        ...state,
        loaded: false,
        loading: false,
        hotel: null,
        errorMessage: action.payload.message
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
  state => state.hotelDetail
);

export const getLoaded = createSelector(getState, state => state.loaded);

export const getLoading = createSelector(getState, state => state.loading);

export const getHotel = createSelector(getState, state => state.hotel);

export const getErrorMessage = createSelector(getState, state => state.errorMessage);
