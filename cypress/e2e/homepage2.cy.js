// E2E testing the homepage (again)
describe('Homepage footer', () => {
  // Checking if the footer loads in on homepage
  it('shows the footer on the homepage', () => {
    cy.visit('/');
    cy.get('footer.shared__footer').should('be.visible');
  });
  // Checking if the social media links are all there
  it('shows social media links with correct URLs', () => {
    cy.visit('/');

    cy.get('.social__links a').should('have.length', 4);

    cy.get('.social__links a[href="https://www.facebook.com"]').should('exist');
    cy.get('.social__links a[href="https://www.instagram.com"]').should('exist');
    cy.get('.social__links a[href="https://www.twitter.com"]').should('exist');
    cy.get('.social__links a[href="https://www.tiktok.com"]').should('exist');
  });
});

