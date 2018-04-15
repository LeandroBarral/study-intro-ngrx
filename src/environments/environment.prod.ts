export const environment = {
  production: true,
  API: {
    AUTHENTICATION: {
      BASE_URL: 'https://api.sandbox.authentication.com/v1',
      SERVICES: {
        ACCOUNT: {
          SIGN_IN: 'account/sign-in',
          SIGN_UP: 'account/sign-up'
        }
      }
    },
    AMADEUS: {
      API_KEY: 'NA0ByTSqwCuiTJZdJgmLy3ZRSmnU7bUc',
      BASE_URL: 'https://api.sandbox.amadeus.com/v1.2',
      SERVICES: {
        HOTEL: {
          AIRPORT_SEARCH: 'hotels/search-airport',
          AIRPORT_DETAIL: 'hotels/:property_code'
        }
      }
    }
  }
};
