import todoReducer from './todoReducer';
import { combineReducers } from 'redux';

const allReducer = combineReducers({ todos: todoReducer });
export default allReducer;
