import React from 'react';
import DisplayHeader from '../components/header/DisplayHeader';
import CandyBox from './CandyBox';

const MainView = () => {
	return (
		<div>
			<DisplayHeader></DisplayHeader>
			<CandyBox></CandyBox>
		</div>
	);
};

export default MainView;
