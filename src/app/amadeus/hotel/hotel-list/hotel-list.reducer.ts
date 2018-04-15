import * as actions from '../../amadeus.actions';

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
        hotels: action.payload || []
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

export const getLoaded = (state: State) => state.loaded;

export const getLoading = (state: State) => state.loading;

export const getHotels = (state: State) => state.hotels;
