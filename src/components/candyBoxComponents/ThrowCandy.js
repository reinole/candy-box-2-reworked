import React from 'react';
import { connect } from 'react-redux';

import Button from '../Button';

const ThrowCandy = ({ candies, dispatch }) => {
	const throwCandy = () => {
		if (candies >= 10) {
			console.log('throwcandy');
			dispatch({ type: 'THROW_CANDIES' });
		} else {
			console.log('Not enough candy');
		}
	};

	return <Button onClick={throwCandy}>Throw 10 candies on the ground</Button>;
};

const mapStateToProps = state => {
	return {
		candies: state.countCandies.candies
	};
};

export default connect(mapStateToProps)(ThrowCandy);
