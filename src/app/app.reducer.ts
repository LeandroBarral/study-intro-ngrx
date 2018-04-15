import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
  MetaReducer,
} from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';

import { environment } from '../environments/environment';

// tslint:disable-next-line:no-empty-interface
export interface State {}

export const reducers: ActionReducerMap<State> = {};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [storeLogger()]
  : [];
