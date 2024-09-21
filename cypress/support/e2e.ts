/* eslint-disable @typescript-eslint/no-namespace */

// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';
import './libs';

declare global {
	namespace Cypress {
		interface Chainable {
			/** Types overloading */
			drag<K extends keyof HTMLElementTagNameMap>(targetSelector: K, options?: Options): Chainable<true>;
			drag(targetSelector: string, options?: Options): Chainable<true>;
			drag(targetAlias: string, options?: Options): Chainable<true>;
			move(options: MoveOptions): Chainable<Element>;
		}
	}
}

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on('uncaught:exception', () => false);
