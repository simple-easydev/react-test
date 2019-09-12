import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from '../reducers';

const loggerMiddleware = createLogger();

const createStoreWithMiddleware = applyMiddleware(
	thunk,
	loggerMiddleware
)(createStore);

const configureStore = (initialState = {}) => createStoreWithMiddleware(rootReducer, initialState);

export default configureStore;