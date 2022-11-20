import { call, put, takeEvery } from 'redux-saga/effects';
import { SET_TODOS, UPDATE_TODO, REMOVE_TODO, FETCH_TODOS, EDIT_TODO, DELETE_TODO } from '../store/actions/todoActions';

const url = 'https://jsonplaceholder.typicode.com/todos';

const fetchTodos = () => fetch(url, { method: 'GET' });
const updateTodo = todo => fetch(url + '/' + todo.id, { method: 'PUT', body: JSON.stringify(todo) });
const deleteTodo = todo => fetch(url + '/' + todo.id, { method: 'DELETE', body: JSON.stringify(todo) });

function* fetchTodosWorker() {
	const data = yield call(fetchTodos);
	const json = yield call(() => new Promise(resp => resp(data.json())));
	yield put({ type: SET_TODOS, payload: json });
}

function* updateTodoWorker(action) {
	const data = yield call(updateTodo, action.payload);
	const json = yield call(() => new Promise(resp => resp(data.json())));
	yield put({ type: UPDATE_TODO, payload: action.payload });
}

function* deleteTodoWorker(action) {
	const data = yield call(deleteTodo, action.payload);
	const json = yield call(() => new Promise(resp => resp(data.json())));
	yield put({ type: REMOVE_TODO, payload: action.payload });
}

export function* setTodosWatcher() {
	yield takeEvery(FETCH_TODOS, fetchTodosWorker);
}

export function* editTodoWatcher() {
	yield takeEvery(EDIT_TODO, updateTodoWorker);
}

export function* deleteTodoWatcher() {
	yield takeEvery(DELETE_TODO, deleteTodoWorker);
}
