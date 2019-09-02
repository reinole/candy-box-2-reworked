import React from 'react';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';

import { ReactComponent as CogIcon } from '../../images/cog.svg';
import { ReactComponent as CandyBoxIcon } from '../../images/candybox.svg';
import { ReactComponent as TreasureMapIcon } from '../../images/treasure-map.svg';
import { ReactComponent as SaveIcon } from '../../images/paper-tray.svg';
import { ReactComponent as InventoryIcon } from '../../images/knapsack.svg';

import DisplayInventory from './DisplayInventory';

const DisplayHeader = ({ candyBox, config, save, health, map }) => {
	return (
		<Wrapper createStyle={candyBox}>
			<StorageWrapper>
				<DisplayInventory></DisplayInventory>
			</StorageWrapper>
			<NavigationWrapper>
				<Navigation>
					<NavigationButtons>
						{candyBox && (
							<ConfigButton>
								<CandyBoxIcon />
							</ConfigButton>
						)}
						<ConfigButton>
							<InventoryIcon />
						</ConfigButton>
						{map && (
							<ConfigButton>
								<TreasureMapIcon />
							</ConfigButton>
						)}
					</NavigationButtons>
					<Config>
						{save && (
							<ConfigButton>
								<SaveIcon />
							</ConfigButton>
						)}
						{config && (
							<ConfigButton>
								<CogIcon />
							</ConfigButton>
						)}
					</Config>
				</Navigation>
				<HealthWrapper>
					{health && <div>Your health: 100/100</div>}
				</HealthWrapper>
			</NavigationWrapper>
		</Wrapper>
	);
};

const mapStateToProps = state => {
	return {
		candyBox: state.initialiseFeature.displayCandyBox,
		config: state.initialiseFeature.displayConfig,
		save: state.initialiseFeature.displaySave,
		health: state.initialiseFeature.displayHealth,
		map: state.initialiseFeature.displayMap
	};
};

export default connect(mapStateToProps)(DisplayHeader);

const Wrapper = styled.div`
	display: flex;
	max-width: 55rem;
	margin: auto;
	padding: 0.5rem;
	margin-bottom: 1rem;
	border: 1px dashed transparent;

	${props =>
		props.createStyle &&
		css`
			border: 1px dashed black;
		`}
`;

const StorageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding-right: 0.25rem;
	width: 15rem;
`;

const NavigationWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding-left: 0.25rem;
	width: 100%;
`;

const NavigationButtons = styled.div`
	display: flex;
`;

const Navigation = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Config = styled.div`
	display: flex;
`;

const ConfigButton = styled.div`
	border: 1px solid black;
	margin-left: 0.5rem;
	cursor: pointer;
`;

const HealthWrapper = styled.div`
	background-color: #30ff49;
	margin-left: 0.5rem;
	margin-top: 0.5rem;
	text-align: center;
`;
