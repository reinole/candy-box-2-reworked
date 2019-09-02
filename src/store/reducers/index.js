import { combineReducers } from 'redux';

import countCandies from './candies/reducer';
import initialiseFeature from './requestFeatures/reducer';

const rootReducer = combineReducers({
	countCandies,
	initialiseFeature
});

export default rootReducer;
