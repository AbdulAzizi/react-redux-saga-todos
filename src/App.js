import {
	ListItemText,
	Checkbox,
	List,
	IconButton,
	ListItem,
	CardHeader,
	Grid,
	Card,
	ListItemButton,
	ListItemIcon
} from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';
import './App.css';

function App() {
	return (
		<Grid mt={4} container spacing={0} direction="column" alignItems="center" justify="center">
			<Grid item xs={12}>
				<Card sx={{ minWidth: 400 }}>
					<CardHeader title="Todos" />
					<List sx={{ width: '100%' }}>
						{[0, 1, 2, 3].map(value => {
							const labelId = `checkbox-list-label-${value}`;

							return (
								<ListItem
									key={value}
									secondaryAction={
										<IconButton edge="end" aria-label="comments">
											<CommentIcon />
										</IconButton>
									}
									disablePadding
								>
									<ListItemButton role={undefined} onClick={() => {}} dense>
										<ListItemIcon>
											<Checkbox
												edge="start"
												checked={false}
												tabIndex={-1}
												disableRipple
												inputProps={{ 'aria-labelledby': labelId }}
											/>
										</ListItemIcon>
										<ListItemText id={labelId} primary={`Line item ${value + 1}`} />
									</ListItemButton>
								</ListItem>
							);
						})}
					</List>
				</Card>
			</Grid>
		</Grid>
	);
}

export default App;
