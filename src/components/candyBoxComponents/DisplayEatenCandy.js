import React from 'react';
import { connect } from 'react-redux';

const EatenCandy = ({ eatenCandies }) => {
	return <p>You have eaten {eatenCandies} candies</p>;
};

const mapStateToProps = state => {
	return {
		eatenCandies: state.countCandies.eatenCandies
	};
};

export default connect(mapStateToProps)(EatenCandy);
