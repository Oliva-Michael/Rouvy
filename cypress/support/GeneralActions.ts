export class GeneralActions {
	static visitTestPage(urlName: string): void {
		cy.visit(urlName ? urlName : '/');
	}

	static checkFullPageLoad(): void {
		cy.waitForStableDOM({ pollInterval: 500, timeout: 20000 });
	}

	static visitTestPageAndWaitForFullLoad(urlName: string): void {
		this.visitTestPage(urlName);
		this.checkFullPageLoad();
	}
}
