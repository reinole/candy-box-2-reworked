const initialState = {
	candies: 29,
	eatenCandies: 0,
	lollipops: 2,
	chocolatBars: 0
};

function countCandies(state = initialState, action) {
	switch (action.type) {
		case 'INCREMENT_CANDIES':
			return { ...state, candies: state.candies + 1 };
		case 'DECREMENT_CANDIES':
			return { ...state, candies: state.candies - state.candies };
		case 'DECREMENT_FIVE_CANDIES':
			return { ...state, candies: state.candies - 5 };
		case 'DECREMENT_TEN_CANDIES':
			return { ...state, candies: state.candies - 10 };
		case 'DECREMENT_THIRTY_CANDIES':
			return { ...state, candies: state.candies - 30 };
		default:
			return state;
	}
}

export default countCandies;
