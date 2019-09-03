import React from 'react';
import { Link } from 'react-router-dom';
import ViewWrapper from '../../../components/ViewWrapper';

const HouseTwo = () => {
	return (
		<ViewWrapper>
			<Link to='/map/'>gå tilbake</Link>

			<span>Ikke Låst hus</span>
		</ViewWrapper>
	);
};

export default HouseTwo;
