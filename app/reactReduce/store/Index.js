import {
	applyMiddleware,
	createStore
} from 'redux';

import thunk from 'redux-thunk';

import {
	persistStore,
	autoRehyrate
} from 'redux-persist';

import {
	AsyncStorage
} from 'react-native';

import reducers from '../reducers';

const logger = store => next => action => {
	if (typeof action === 'function') console.log('dispatching a function');
	else console.log('dispatching', action);
	let result = next(action);
	console.log('next state', store.getState());
	return result;
}

let middlewares = [
	logger,
	thunk
];

let createAppStore = applyMiddleware(...middlewares)(createStore);

export default function configureStore(onComplete: () => void) {
	const store = autoRehyrate()(createAppStore)(reducers);
	let opt = {
		storage: AsyncStorage,
		transform = [],
	};
	persistStore(store, opt, onComplete);
	return store;
}