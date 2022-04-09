/// <reference types="cypress" />

describe('Login test', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('#btn-navbar-login').click();
  });

  it('User should be redirected to the login page', () => {
    cy.url().should('eq', 'https://app.hiboo.io/login');
    cy.get('[data-testid="username"]').should('be.visible');
    cy.get('[data-testid="password"]').should('be.visible');
    cy.get('[type="submit"]').should('be.disabled');
  });

  it('All links on the login page should have a status 200', () => {
    cy.url().should('eq', 'https://app.hiboo.io/login');
    cy.get("a:not([href*='mailto:'])").each(page => {
      // redirection on Linkedin and hiboo/princing linked are not authorized
      cy.request(page.prop('href')).should(response => {
        expect(response.status).to.eq(200);
        expect(response).to.have.property('headers');
      });
    });
  });
  it('User should be redirected to the reset password page', () => {
    cy.get('[href="/reset-password?email="]').click();
    cy.url().should('eq', 'https://app.hiboo.io/reset-password?email=');
    cy.get('#send_token-email').should('be.visible');
    cy.get('[type="submit"]').should('be.disabled');
  });

  it('User should NOT be able to login with a bad credentials', () => {
    cy.get('[data-testid="username"]').type('badmail@gmail.com');
    cy.get('[data-testid="password"]').type('Blabla');
    cy.get('[type="submit"]').click();
    cy.url().should('eq', 'https://app.hiboo.io/login');
    cy.get('.text-danger').contains("L'email ou mot de passe est invalide");
  });

  // After sending reset request, there is no BACK button to the main site
  it('User should be able to reset password', () => {
    cy.get('[href="/reset-password?email="]').click();
    cy.get('#send_token-email').type('titi@gmail.com');
    cy.intercept('https://api.hiboo.io/send-reset-token').as('sendReset');
    cy.get('[type="submit"]').click();
    cy.wait('@sendReset').its('response.statusCode').should('eq', 200);
    cy.contains('Intructions envoyées !');
  });
});
