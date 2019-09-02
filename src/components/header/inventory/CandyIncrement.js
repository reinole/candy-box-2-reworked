import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const CandyIncrement = ({ candies, dispatch }) => {
	useEffect(() => {
		const interval = setInterval(() => {
			dispatch({ type: 'INCREMENT_CANDIES' });
		}, 300);
		return () => {
			clearInterval(interval);
		};
	}, []);

	return <div>You have {candies} candy </div>;
};

const mapStateToProps = state => {
	return {
		candies: state.countCandies.candies
	};
};

export default connect(mapStateToProps)(CandyIncrement);
