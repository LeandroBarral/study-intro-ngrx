import * as fromRoot from '../app.reducer';
import * as actions from './layout.actions';

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
  return localStorageSync({ keys: ['layout'], rehydrate: true })(reducer);
}

export interface State extends fromRoot.State {
  layout: LayoutState;
}

export interface LayoutState {
  sidemenuOpen?: boolean;
}

const initialState: LayoutState = {};

// export const reducers: ActionReducerMap<LayoutState> = {
//   sidemenuOpen: false
// };

export function reducers(
  state = initialState,
  action: actions.LayoutActions
): LayoutState {
  switch (action.type) {
    case actions.Types.TOGGLE_SIDEMENU: {
      return {
        ...state,
        sidemenuOpen: !state.sidemenuOpen
      };
    }

    default: {
      return state;
    }
  }
}

export const getLayoutState = createFeatureSelector<LayoutState>('layout');

export const getIsSidemenuOpen = createSelector(
  getLayoutState,
  state => state.sidemenuOpen
);
