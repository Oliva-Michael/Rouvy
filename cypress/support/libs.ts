import 'cypress-real-events';
import '@4tw/cypress-drag-drop';
import { registerCommand } from 'cypress-wait-for-stable-dom';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const registerCypressGrep = require('@cypress/grep');

registerCypressGrep();
registerCommand();
