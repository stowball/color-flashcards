import { createStore } from 'redux';
import { rootReducer } from './reducers';
import { initialState } from './initial-state';

export const store = createStore(rootReducer, initialState);
