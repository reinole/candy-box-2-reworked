import React from 'react';
import styled from 'styled-components';
import ViewWrapper from '../components/ViewWrapper';
import { Link } from 'react-router-dom';

import { ReactComponent as OpenHouseIcon } from '../images/openHouse.svg';
import { ReactComponent as LockedHouseIcon } from '../images/lockedHouse.svg';
import { ReactComponent as ShopIcon } from '../images/shop.svg';
import { ReactComponent as ChurchIcon } from '../images/church.svg';

const MapView = () => {
	return (
		<ViewWrapper>
			<h1>Map</h1>
			<MapLayerOne>
				<ChurchIcon></ChurchIcon>
			</MapLayerOne>

			<MapLayerTwo>
				<LayerOneDivider>
					<StyledLink to=''>
						<LockedHouseIcon />
					</StyledLink>
					<StyledLink to='/city/shop/'>
						<ShopIcon />
					</StyledLink>
					<StyledLink to=''>
						<LockedHouseIcon />
					</StyledLink>
				</LayerOneDivider>
				<LayerOneDivider>
					<StyledLink to='/city/forge/'>
						<ShopIcon />
					</StyledLink>
					<StyledLink to='/city/houseone/'>
						<OpenHouseIcon />
					</StyledLink>
					<StyledLink to='/city/housetwo/'>
						<OpenHouseIcon />
					</StyledLink>
				</LayerOneDivider>
			</MapLayerTwo>
			<MapLayerThree>Rekke med hus</MapLayerThree>
		</ViewWrapper>
	);
};

export default MapView;

const MapLayerOne = styled.div`
	display: flex;
	justify-content: center;
	margin: auto;
	width: 100%;
	margin-bottom: 5rem;
`;

const MapLayerTwo = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`;

const LayerOneDivider = styled.div`
	display: flex;
`;

const MapLayerThree = styled.div`
	display: flex;
`;

const StyledLink = styled(Link)`
	transition: box-shadow 0.2s ease-in-out;

	&:hover {
		-webkit-box-shadow: 0px 0px 59px 2px rgba(0, 0, 0, 0.35);
		-moz-box-shadow: 0px 0px 59px 2px rgba(0, 0, 0, 0.35);
		box-shadow: 0px 0px 59px 2px rgba(0, 0, 0, 0.35);
	}
`;
// Green Shadow
// -webkit-box-shadow: 0px 0px 59px 2px rgba(64, 255, 0, 1);
// -moz-box-shadow: 0px 0px 59px 2px rgba(64, 255, 0, 1);
// box-shadow: 0px 0px 59px 2px rgba(64, 255, 0, 1);

// Red Shadow
// -webkit-box-shadow: 0px 0px 59px 2px rgba(255,125,125,1);
// -moz-box-shadow: 0px 0px 59px 2px rgba(255,125,125,1);
// box-shadow: 0px 0px 59px 2px rgba(255,125,125,1);
