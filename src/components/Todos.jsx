import React, { useEffect } from 'react';
import { Todo } from './Todo';
import { List } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { FETCH_TODOS } from '../store/actions/todoActions';

export const Todos = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({ type: FETCH_TODOS });
	}, []);

	const todos = useSelector(state => state.todos);
	return (
		<List sx={{ width: '100%' }}>
			{todos.map(props => (
				<Todo key={props.id} {...props} />
			))}
		</List>
	);
};
