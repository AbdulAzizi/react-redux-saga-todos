import { CardHeader, Grid, Card } from '@mui/material';

import './App.css';
import { Todos } from './components/Todos';

function App() {
	return (
		<Grid mt={4} container spacing={0} direction="column" alignItems="center" justify="center">
			<Grid item xs={12}>
				<Card sx={{ minWidth: 400 }}>
					<CardHeader title="Todos" />
					<Todos />
				</Card>
			</Grid>
		</Grid>
	);
}

export default App;
