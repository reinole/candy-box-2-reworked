import React from 'react';
import { connect } from 'react-redux';

import Button from '../Button';

const EatCandy = ({ candies, dispatch }) => {
	const consumeCandy = () => {
		if (candies > 0) {
			console.log('eatcandy');
			dispatch({ type: 'EAT_CANDIES' });
		} else {
			console.log('Not enough candy');
		}
	};

	return <Button onClick={consumeCandy}>Eat all the candies</Button>;
};

const mapStateToProps = state => {
	return {
		candies: state.countCandies.candies
	};
};

export default connect(mapStateToProps)(EatCandy);
