// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
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
          AIRPORT_SEARCH: 'hotels/search-airport'
        }
      }
    }
  }
};
