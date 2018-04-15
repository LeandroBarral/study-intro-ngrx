import * as fromRoot from '../app.reducer';
import * as fromHotelList from './hotel/hotel-list/hotel-list.reducer';
import * as actions from './amadeus.actions';

import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap
} from '@ngrx/store';

export interface State extends fromRoot.State {
  amadeus: AmadeusState;
}

export interface AmadeusState {
  hotelList: fromHotelList.State;
}

export const reducers: ActionReducerMap<AmadeusState> = {
  hotelList: fromHotelList.reducer
};

export const getAmadeusState = createFeatureSelector<AmadeusState>('amadeus');
