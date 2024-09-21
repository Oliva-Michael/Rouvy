import { GeneralActions } from "../support/GeneralActions";
import { RouvyLogin } from "../support/page-objects/Rouvy/RouvyLogin";
import { RouvyRoutes } from "../support/page-objects/Rouvy/RouvyRoutes";

describe('To test ROUTES page', () => {
	// @NOTE: testIsolation is not mentioned, by default is TRUE
	const searchRouteName = 'Cape Town';
	const searchRouteId = '84288';
	
	beforeEach(() => {
        GeneralActions.visitTestPageAndWaitForFullLoad('login');
		RouvyLogin.loginViaCredentials();
	});

	it('Visit Routes page and check search button', { tags: ['@Routes'] }, () => {
		const searchButtonClass = 'relative.inline-flex.uppercase.text-center';
		
		RouvyRoutes.visitTestPageAndCheck('routes/featured');
		RouvyRoutes.checkUiElement(searchButtonClass);
		RouvyRoutes.visitTestPageViaButtonAndCheck(searchButtonClass, 'routes/new-search');
	});

	it('Find a route by name & AR and open', { tags: ['@Routes'] }, () => {
		RouvyRoutes.visitTestPageAndCheck('routes/new-search');
		RouvyRoutes.searchByName(searchRouteName);
		RouvyRoutes.searchByTagValue('ar-route');
		RouvyRoutes.findSearchedRoute(searchRouteName);
		RouvyRoutes.openRouteAndCheck(1);
	});

	it('Open route by link', { tags: ['@Routes'] }, () => {
		RouvyRoutes.visitTestPageAndCheck(`new-route/${searchRouteId}`);
		RouvyRoutes.openRouteInAppAndCheck(searchRouteId);
	});
});