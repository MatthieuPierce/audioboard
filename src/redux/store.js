import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/rootReducer.js';
import thunkMiddleware from 'redux-thunk';


export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));