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
const todoReducer = (state = todos, action) => {
	switch (action.type) {
		case 'ALL':
			return state;
		default:
			return state;
	}
};
export default todoReducer;
