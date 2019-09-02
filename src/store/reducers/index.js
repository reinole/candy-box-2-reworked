import { combineReducers } from 'redux';

import countCandies from './candies/reducer';

const rootReducer = combineReducers({
	countCandies
});

export default rootReducer;
