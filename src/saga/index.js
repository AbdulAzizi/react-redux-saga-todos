import { all } from 'redux-saga/effects';
import { setTodosWatcher } from './todoSaga';

export function* rootWatcher() {
	yield all([setTodosWatcher()]);
}
