/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
declare namespace Cypress {
  interface Chainable<Subject = any> {
    // global commands
    linksTests(url: string): void;
  }
}
