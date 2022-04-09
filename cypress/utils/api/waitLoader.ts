// eslint-disable-next-line import/prefer-default-export
export function waitForLoading() {
  cy.get('[name="spinner"]')
    .should('be.visible')
    .then($load => {
      cy.wrap($load).should('not.exist');
    });
}
