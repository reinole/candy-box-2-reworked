import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers/index';

const persistConfig = {
	key: 'player',
	storage
};

const persistedReducer = persistReducer(
	persistConfig,
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default () => {
	let store = createStore(persistedReducer);
	let persistor = persistStore(store);
	return { store, persistor };
};
