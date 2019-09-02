import React from 'react';
import { connect } from 'react-redux';

const EatCandy = ({
	candy,
	setCandy,
	eatenCandy,
	setEatenCandy,
	candies,
	dispatch
}) => {
	const consumeCandy = () => {
		if (candies > 0) {
			console.log('eatcandy');
			setCandy(candy - candy);
			setEatenCandy(eatenCandy + candy);
			dispatch({ type: 'DECREMENT_CANDIES' });
		} else {
			console.log('Not enough candy');
		}
	};

	return <button onClick={consumeCandy}>Eat all the candies</button>;
};

const mapStateToProps = state => {
	return {
		candies: state.countCandies.candies
	};
};

export default connect(mapStateToProps)(EatCandy);
