import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import allReducers from './store/reducers';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { rootWatcher } from './saga';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(allReducers, composeEnhancer(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootWatcher);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
