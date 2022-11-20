import { all } from 'redux-saga/effects';
import { setTodosWatcher, editTodoWatcher, deleteTodoWatcher } from './todoSaga';

export function* rootWatcher() {
	yield all([setTodosWatcher(), editTodoWatcher(), deleteTodoWatcher()]);
}
