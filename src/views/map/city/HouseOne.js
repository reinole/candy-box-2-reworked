import React from 'react';
import { Link } from 'react-router-dom';
import ViewWrapper from '../../../components/ViewWrapper';

const HouseOne = () => {
	return (
		<ViewWrapper>
			<Link to='/map/'>gå tilbake</Link>
			<span>Åpent hus</span>
		</ViewWrapper>
	);
};

export default HouseOne;
