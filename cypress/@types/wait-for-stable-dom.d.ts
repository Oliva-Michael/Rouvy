type StableDomOptions = {
  pollInterval?: number;
  timeout?: number;
  mutationObserver?: {
    subtree?: boolean;
    childList?: boolean;
    attributes?: boolean;
    attributeOldValue?: boolean;
    characterData?: boolean;
    characterDataOldValue?: boolean;
  };
};
declare namespace Cypress {
  interface Chainable {
    waitForStableDOM(
      options?: StableDomOptions
    ): Chainable<JQuery<HTMLElement>>;
  }
}

declare module 'cypress-wait-for-stable-dom' {
  export const registerCommand: (defaultOptions?: StableDomOptions) => void;
}
