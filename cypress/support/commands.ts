Cypress.Commands.add('linksTests', (url: string) => {
  cy.visit(url);
  // eslint-disable-next-line quotes
  cy.get("a:not([href*='/pricing'], [href*='linkedin'])").each(page => {
    // redirection on Linkedin and hiboo/princing linked are not authorized
    cy.request(page.prop('href')).should(response => {
      expect(response.status).to.eq(200);
      expect(response).to.have.property('headers');
    });
  });
});
