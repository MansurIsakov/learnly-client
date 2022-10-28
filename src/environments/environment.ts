// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  restrictedEmail: 'admin@gmail.com',
  API_ENDPOINT: 'http://localhost:3000/api/v1',

  getRestrictedEmail() {
    return this.restrictedEmail;
  },
};
