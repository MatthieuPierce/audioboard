import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/rootReducer.js'


export const store = createStore(rootReducer, applyMiddleware);