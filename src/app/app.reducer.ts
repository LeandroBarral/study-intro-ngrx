import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
  MetaReducer
} from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';

import { environment } from '../environments/environment';
import * as fromAmadeus from './amadeus/amadeus.reducers';
import * as fromAuth from './authentication/authentication.reducers';

// tslint:disable-next-line:no-empty-interface
export interface State {}

export const reducers: ActionReducerMap<State> = {};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [
      storeLogger(),
      fromAuth.localStorageSyncReducer,
      fromAmadeus.localStorageSyncReducer
    ]
  : [];
