/// <reference types="cypress" />

describe('Links Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('List all links', () => {
    cy.visit('/');
    // eslint-disable-next-line quotes
    cy.get("a:not([href*='mailto:'])").each(page => {
      cy.log(page.prop('href'));
    });
  });

  it('All links should work with the right redirection', () => {
    cy.visit('/');
    // eslint-disable-next-line quotes
    cy.get("a:not([href*='/pricing'], [href*='linkedin'])").each(page => {
      // redirection on Linkedin and hiboo/princing linked are not authorized
      cy.request(page.prop('href')).should(response => {
        expect(response.status).to.eq(200);
        expect(response).to.have.property('headers');
      });
    });
  });
});
