import React from 'react';
import { Todo } from './Todo';
import { List } from '@mui/material';
import { useSelector } from 'react-redux';

export const Todos = () => {
	const todos = useSelector(state => state.todos);
	return (
		<List sx={{ width: '100%' }}>
			{todos.map(props => (
				<Todo key={props.id} {...props} />
			))}
		</List>
	);
};
