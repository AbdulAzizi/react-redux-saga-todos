const todoReducer = (state = [], action) => {
	switch (action.type) {
		case 'SET_TODOS':
			return [...action.payload];
		case 'UPDATE_TODO':
			const updatedTodos = state.map(todo => {
				if (todo.id === action.payload.id) todo = action.payload;
				return todo;
			});
			return updatedTodos;
		case 'REMOVE_TODO':
			return state.filter(todo => todo.id !== action.payload.id);
		default:
			return state;
	}
};
export default todoReducer;
