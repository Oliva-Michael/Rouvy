import { GeneralActions } from "../support/GeneralActions";
import { RouvyLogin } from "../support/page-objects/Rouvy/RouvyLogin";

describe('To test login', () => {  
    describe('To test Valid login', { tags: ['@Login', '@ValidLogin']}, () => {
		// @NOTE: testIsolation is not mentioned, by default is TRUE
        beforeEach(() => {
            GeneralActions.visitTestPageAndWaitForFullLoad('login');
		});

		it('Check valid login via credentials', { tags: ['@Login'] }, () => {
			RouvyLogin.loginViaCredentials();

		});

        // @NOTE: reserved for the rest of valid login tests
	});

	describe.skip('To test invalid login', { tags: ['@Login', '@InvalidLogin'] }, () => {
		// @NOTE: testIsolation is not mentioned, by default is TRUE
		// @NOTE: reserved for invalid login tests
	});
});
