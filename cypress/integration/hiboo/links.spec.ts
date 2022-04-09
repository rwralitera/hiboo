/// <reference types="cypress" />

import { registerApiAlias } from '../../utils/api/waitApi';

// @ts-check

describe('Links Test', () => {
  it('List all links', () => {
    cy.visit('/');
    registerApiAlias();
    // eslint-disable-next-line quotes
    cy.get("a:not([href*='mailto:'])").each(page => {
      cy.log(page.prop('href'));
    });
  });

  it('HOME PAGE All links should work with the right redirection', () => {
    cy.linksTests('/');
  });

  it('BLOG PAGE All links should work with the right redirection', () => {
    cy.linksTests('/blog');
  });
});
