import * as types from './types';

export const increment = () => ({
	type: types.INCREMENT_CANDIES
});

export const decrement = () => ({
	type: types.DECREMENT_CANDIES
});

export const decrementFiveCandies = () => ({
	type: types.DECREMENT_FIVE_CANDIES
});

export const decrementTenCandies = () => ({
	type: types.DECREMENT_TEN_CANDIES
});

export const decrementThirtyCandies = () => ({
	type: types.DECREMENT_THIRTY_CANDIES
});
