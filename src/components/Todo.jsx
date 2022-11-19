import React from 'react';
import { ListItem, IconButton, ListItemButton, ListItemIcon, Checkbox, ListItemText } from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';
import { useDispatch } from 'react-redux';

export const Todo = ({ userId, id, title, completed }) => {
	const dispatch = useDispatch();
	const labelId = `checkbox-list-label-${id}`;
	return (
		<ListItem
			secondaryAction={
				<IconButton edge="end" aria-label="comments">
					<CommentIcon />
				</IconButton>
			}
			disablePadding
		>
			<ListItemButton
				role={undefined}
				onClick={() => dispatch({ type: 'EDIT_COMPLETED', payload: { userId, id, title, completed: !completed } })}
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
