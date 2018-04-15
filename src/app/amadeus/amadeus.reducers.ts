import * as fromRoot from '../app.reducer';
import * as fromHotelList from './hotel/hotel-list/hotel-list.reducer';
import * as fromHotelDetail from './hotel/hotel-detail/hotel-detail.reducer';
import * as actions from './amadeus.actions';

import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
  ActionReducer
} from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({ keys: ['amadeus'], rehydrate: true })(reducer);
}

export interface State extends fromRoot.State {
  amadeus: AmadeusState;
}

export interface AmadeusState {
  hotelList: fromHotelList.State;
  hotelDetail: fromHotelDetail.State;
}

export const reducers: ActionReducerMap<AmadeusState> = {
  hotelList: fromHotelList.reducer,
  hotelDetail: fromHotelDetail.reducer
};

export const getAmadeusState = createFeatureSelector<AmadeusState>('amadeus');
