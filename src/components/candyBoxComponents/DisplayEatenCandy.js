import React from 'react';
import { connect } from 'react-redux';

const EatenCandy = ({ candies }) => {
	return <p>You have eaten {candies} candy</p>;
};

const mapStateToProps = state => {
	return {
		candies: state.countCandies.candies
	};
};

export default connect(mapStateToProps)(EatenCandy);
