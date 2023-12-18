import { devToolsEnhancer } from '@redux-devtools/extension';
import { createStore } from 'redux';
import { phoneBook } from './phoneBook/reducer';

const devtools = devToolsEnhancer();

export const store = createStore(phoneBook, devtools);
