import createSagaMiddleware from 'redux-saga';
import { rootWatcher } from '../saga';
import allReducers from './reducers';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(allReducers, composeEnhancer(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootWatcher);

const StoreProvider = ({ children }) => {
	return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
