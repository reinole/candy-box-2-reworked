import React from 'react';
import { Link } from 'react-router-dom';
import ViewWrapper from '../../../components/ViewWrapper';

const Shop = () => {
	return (
		<ViewWrapper>
			<Link to='/map/'>gå tilbake</Link>

			<span>Her er det butikk</span>
		</ViewWrapper>
	);
};

export default Shop;
