export const fillLoginPageAndProceed = (): void => {
	cy.get('[data-cy="email-input"]').click().type(Cypress.env('USER_USERNAME'));
	cy.get('[data-cy="password-input"]').click().type(Cypress.env('USER_PASSWORD'));
	cy.get('[data-cy="submit-button"]').click();


};

