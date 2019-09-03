import React from 'react';
import { connect } from 'react-redux';

const EatenCandy = ({ eatenCandies }) => {
	return <span>You have eaten {eatenCandies} candies</span>;
};

const mapStateToProps = state => {
	return {
		eatenCandies: state.countCandies.eatenCandies
	};
};

export default connect(mapStateToProps)(EatenCandy);
