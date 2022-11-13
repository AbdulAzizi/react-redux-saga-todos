import React from 'react';
import { Todo } from './Todo';
import { List } from '@mui/material';

export const Todos = () => {
	const todos = [
		{
			userId: 1,
			id: 1,
			title: 'delectus aut autem',
			completed: false
		},
		{
			userId: 1,
			id: 2,
			title: 'quis ut nam facilis et officia qui',
			completed: false
		},
		{
			userId: 1,
			id: 3,
			title: 'fugiat veniam minus',
			completed: false
		}
	];
	return (
		<List sx={{ width: '100%' }}>
			{todos.map(props => (
				<Todo key={props.id} {...props} />
			))}
		</List>
	);
};
