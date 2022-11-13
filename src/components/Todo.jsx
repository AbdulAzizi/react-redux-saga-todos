import React from 'react';
import { ListItem, IconButton, ListItemButton, ListItemIcon, Checkbox, ListItemText } from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';

export const Todo = ({ userId, id, title, completed }) => {
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
			<ListItemButton role={undefined} onClick={() => {}} dense>
				<ListItemIcon>
					<Checkbox edge="start" checked={false} tabIndex={-1} disableRipple inputProps={{ 'aria-labelledby': labelId }} />
				</ListItemIcon>
				<ListItemText id={labelId} primary={`Line item ${id + 1}`} />
			</ListItemButton>
		</ListItem>
	);
};
