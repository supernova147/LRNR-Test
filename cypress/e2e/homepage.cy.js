// E2E testing the homepage
// Checking if the header is visible
describe('Homepage', () => {
    it('shows heading and CTA button', () => {
        cy.visit('/');
        cy.contains('Create Amazing Quizzes').should('be.visible');
        cy.contains('Generate Your Quiz').should('be.visible');
    });
// Checking if the user can navigate to the quiz page from homepage
    it('navigates to quiz page when clicking the button', () => {
        cy.visit('/');
        cy.contains('Generate Your Quiz').click();
        cy.url().should('include', '/quiz');
        cy.contains('Generate Your Quiz').should('be.visible');
    });
});
