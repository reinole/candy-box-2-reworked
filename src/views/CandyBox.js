import React, { useState } from 'react';
import styled from 'styled-components';

import EatCandy from '../components/candyBoxComponents/EatCandy';
import EatenCandy from '../components/candyBoxComponents/DisplayEatenCandy';
import RequestFeature from '../components/candyBoxComponents/RequestFeature';

const GameView = props => {
	const [candy, setCandy] = useState(0);
	const [eatenCandy, setEatenCandy] = useState(0);

	// RequestFeature is up next
	return (
		<Wrapper>
			<EatCandy
				candy={candy}
				setCandy={setCandy}
				eatenCandy={eatenCandy}
				setEatenCandy={setEatenCandy}
			/>
			<EatenCandy eatenCandy={eatenCandy} setEatenCandy={setEatenCandy} />

			<RequestFeature />
		</Wrapper>
	);
};

export default GameView;

const Wrapper = styled.div`
	margin: 0 auto;
	max-width: 56rem;
`;
