import React from 'react';
import styled from 'styled-components';
import DisplayInventory from './DisplayInventory';

const DisplayHeader = () => {
	return (
		<Wrapper>
			<StorageWrapper>
				<DisplayInventory></DisplayInventory>
			</StorageWrapper>
			<NavigationWrapper>
				<Navigation>
					<NavigationButtons>
						<div>Candy box</div>
						<div>Inventory</div>
						<div>Map</div>
					</NavigationButtons>
					<Config>
						<div>Save</div>
						<div>Config</div>
					</Config>
				</Navigation>
				<HealthWrapper>
					<div>Health</div>
				</HealthWrapper>
			</NavigationWrapper>
		</Wrapper>
	);
};

export default DisplayHeader;

const Wrapper = styled.div`
	display: flex;
	max-width: 55rem;
	margin: auto;
	padding: 0.5rem;
	border: 1px dashed black;
	margin-bottom: 1rem;
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

const HealthWrapper = styled.div``;
