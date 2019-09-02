import React, { Fragment } from 'react';
import CandyIncrement from './inventory/CandyIncrement';

const DisplayInventory = () => {
	return (
		<Fragment>
			<CandyIncrement />
			<div>Lollipop storage</div>
			<div>Chocolate bar Storage</div>
		</Fragment>
	);
};

export default DisplayInventory;
