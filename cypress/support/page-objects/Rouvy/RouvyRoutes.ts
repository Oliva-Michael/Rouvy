import { GeneralActions } from "../../GeneralActions";

export class RouvyRoutes {
	static visitTestPageAndCheck(urlName: string){
		GeneralActions.visitTestPageAndWaitForFullLoad(urlName);
		cy.location('pathname').should('contain', urlName);
	}

	static checkUiElement(elementClass: string, isVisible = true){
		cy.get('body').find(`.${elementClass}`).should(isVisible ? 'exist' : 'not.exist');
	}

	static visitTestPageViaButtonAndCheck(elementClass: string, urlName: string){
		cy.get('body').find(`.${elementClass}`).click();
		GeneralActions.checkFullPageLoad();
		cy.location('pathname').should('contain', urlName);
	}	

	static searchByName(name: string){
		cy.get('[name="searchQuery"]').click().realType(name);
		GeneralActions.checkFullPageLoad();
	}
	
	static searchByTagValue(tagValue: string){
		cy.get('body').find('.group.relative').filter(`[value="${tagValue}"]`).realClick({position: "left"});
		GeneralActions.checkFullPageLoad();
	}

	static findSearchedRoute(name: string){
		cy.get('body').find('.relative.flex.flex-col').eq(0).should('contain.text', name);
		
	}

	static openRouteAndCheck(positionOfRouteInList: number){
		cy.get('body').find('.relative.flex.flex-col').eq(positionOfRouteInList - 1).click();
		GeneralActions.checkFullPageLoad();
		cy.location('pathname').should('contain', 'new-route');
	}	

	static openRouteInAppAndCheck(routeId: number | string){
		cy.get('body').find('.btn-primary')
			.should('have.text', 'Open route in app')
			.invoke('removeAttr', 'target')
			.realClick();
		cy.url().should('contain', `start-route?route-id=${routeId}`);		
	}	
}