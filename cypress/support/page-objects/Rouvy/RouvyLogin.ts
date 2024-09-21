import { GeneralActions } from "../../GeneralActions";
import { fillLoginPageAndProceed } from "../../utils";

export class RouvyLogin {
	static loginViaCredentials(isValid = true): void {
		cy.location('pathname').should('contain', '/login');
		fillLoginPageAndProceed();
		GeneralActions.checkFullPageLoad();
		cy.location('pathname').should(isValid ? 'not.equal' : 'equal', '/login');
	}
}
