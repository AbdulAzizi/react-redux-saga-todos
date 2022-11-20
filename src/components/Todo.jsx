import React from 'react';
import { ListItem, IconButton, ListItemButton, ListItemIcon, Checkbox, ListItemText } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { DELETE_TODO, EDIT_TODO } from '../store/actions/todoActions';

export const Todo = ({ userId, id, title, completed }) => {
	const dispatch = useDispatch();
	const labelId = `checkbox-list-label-${id}`;
	return (
		<ListItem
			secondaryAction={
				<IconButton
					onClick={() => dispatch({ type: DELETE_TODO, payload: { userId, id, title, completed: !completed } })}
					edge="end"
					aria-label="comments"
				>
					<Delete />
				</IconButton>
			}
			disablePadding
		>
			<ListItemButton
				role={undefined}
				onClick={() => dispatch({ type: EDIT_TODO, payload: { userId, id, title, completed: !completed } })}
				dense
			>
				<ListItemIcon>
					<Checkbox
						edge="start"
						checked={completed}
						tabIndex={-1}
						disableRipple
						inputProps={{ 'aria-labelledby': labelId }}
					/>
				</ListItemIcon>
				<ListItemText id={labelId} primary={`${id}. ${title}`} />
			</ListItemButton>
		</ListItem>
	);
};
