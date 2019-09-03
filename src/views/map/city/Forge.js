import React from 'react';
import { Link } from 'react-router-dom';
import ViewWrapper from '../../../components/ViewWrapper';

const Forge = () => {
	return (
		<ViewWrapper>
			<Link to='/map/'>gå tilbake</Link>
			<span>Forge</span>
		</ViewWrapper>
	);
};

export default Forge;
