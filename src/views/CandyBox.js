import React from 'react';
import { connect } from 'react-redux';

import ViewWrapper from '../components/ViewWrapper';
import EatCandy from '../components/candyBoxComponents/EatCandy';
import EatenCandy from '../components/candyBoxComponents/DisplayEatenCandy';
import ThrowCandy from '../components/candyBoxComponents/ThrowCandy';
import RequestFeature from '../components/candyBoxComponents/RequestFeature';

const GameView = ({ allFeaturesImplemented }) => {
	return (
		<ViewWrapper>
			<EatCandy />
			<EatenCandy />
			<ThrowCandy />

			{!allFeaturesImplemented && <RequestFeature />}
		</ViewWrapper>
	);
};

const mapStateToProps = state => {
	return {
		allFeaturesImplemented: state.initialiseFeature.allFeaturesImplemented
	};
};

export default connect(mapStateToProps)(GameView);
