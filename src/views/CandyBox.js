import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import ViewWrapper from '../components/ViewWrapper';
import EatCandy from '../components/candyBoxComponents/EatCandy';
import EatenCandy from '../components/candyBoxComponents/DisplayEatenCandy';
import RequestFeature from '../components/candyBoxComponents/RequestFeature';

const GameView = ({ allFeaturesImplemented }) => {
	console.log(allFeaturesImplemented);
	const [candy, setCandy] = useState(0);
	const [eatenCandy, setEatenCandy] = useState(0);

	return (
		<ViewWrapper>
			<EatCandy eatenCandy={eatenCandy} setEatenCandy={setEatenCandy} />
			<EatenCandy eatenCandy={eatenCandy} setEatenCandy={setEatenCandy} />

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
