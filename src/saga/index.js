import { all } from 'redux-saga/effects';
import { setTodosWatcher, editTodoWatcher } from './todoSaga';

export function* rootWatcher() {
	yield all([setTodosWatcher(), editTodoWatcher()]);
}
