const initialState = {
	candies: 0,
	eatenCandies: 0,
	lollipops: 2,
	chocolatBars: 0
};

function countCandies(state = initialState, action) {
	switch (action.type) {
		case 'INCREMENT_CANDIES':
			return { candies: state.candies + 1 };
		case 'DECREMENT_CANDIES':
			return { candies: state.candies - state.candies };
		default:
			return state;
	}
}

export default countCandies;
