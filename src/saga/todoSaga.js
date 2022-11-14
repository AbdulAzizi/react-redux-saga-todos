import { call, put, takeEvery } from 'redux-saga/effects';

const fetchTodos = () => fetch('https://jsonplaceholder.typicode.com/todos?limit=10', { method: 'GET' });

function* fetchTodosWorker() {
	const data = yield call(fetchTodos);
	const json = yield call(() => new Promise(resp => resp(data.json())));
	yield put({ type: 'SET_TODOS', payload: json });
}
export function* setTodosWatcher() {
	yield takeEvery('FETCH_TODOS', fetchTodosWorker);
}
