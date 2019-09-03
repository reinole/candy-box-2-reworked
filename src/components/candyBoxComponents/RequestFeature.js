import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

const RequestFeature = ({ candies, dispatch, features }) => {
	const [requestCost, setRequestCost] = useState(
		'Request a new feature from the developer (30 candies)'
	);
	const [requestToolTipText, setRequestToolTipText] = useState('');

	useEffect(() => {
		// This useEffect should not run forever
		console.log('kjører som faen');
		updateDisplayButtonState();
	}, [candies]);

	const updateDisplayButtonState = () => {
		// denne må stoppes
		if (candies >= 30 && features.displayMap !== true) {
			dispatch({
				type: 'DISPLAYFEATUREBUTTON'
			});
		}
	};

	const addMoreFeatures = () => {
		if (candies >= 30 && features.displayCandyBox === false) {
			dispatch({ type: 'DISPLAYCANDYBOX' });
			dispatch({ type: 'DECREMENT_THIRTY_CANDIES' });
			console.log('CandyBox');
			setRequestCost('Request another one (5 candies)');
			setRequestToolTipText('You have unlocked a status bar! (above)');
		}

		if (
			candies >= 5 &&
			features.displayCandyBox === true &&
			features.displayConfig === false
		) {
			dispatch({ type: 'DISPLAYCONFIG' });
			dispatch({ type: 'DECREMENT_FIVE_CANDIES' });
			console.log('Config');
			setRequestCost('Request once again (5 candies)');
			setRequestToolTipText('You now have access to a configuration tab.');
		}
		if (
			candies >= 5 &&
			features.displayConfig === true &&
			features.displaySave === false
		) {
			dispatch({ type: 'DISPLAYSAVE' });
			dispatch({ type: 'DECREMENT_FIVE_CANDIES' });
			console.log('Save');
			setRequestCost('Request for something more exciting (5 candies)');
			setRequestToolTipText('A wild saving tab appears!');
		}
		if (
			candies >= 5 &&
			features.displaySave === true &&
			features.displayHealth === false
		) {
			dispatch({ type: 'DISPLAYHEALTH' });
			dispatch({ type: 'DECREMENT_FIVE_CANDIES' });

			console.log('Health');
			setRequestCost(
				'Final request! This one has to be worth the candies. (10 candies)'
			);
			setRequestToolTipText(
				'Heres 100 health points for you. Theyre going to be useful.'
			);
		}

		if (
			candies >= 10 &&
			features.displayHealth === true &&
			features.displayMap === false
		) {
			dispatch({ type: 'DISPLAYMAP' });
			dispatch({ type: 'DECREMENT_TEN_CANDIES' });
			dispatch({ type: 'HIDEFEATUREBUTTON' });
			dispatch({ type: 'ALLFEATURESIMPLEMENTED' });

			console.log('Map');
		}
	};

	const displayFeatureButton = () => {
		if (
			features.displayFeatureButton === true &&
			features.hideFeatureButton === false
		) {
			return (
				<div>
					<button onClick={addMoreFeatures}>{requestCost}</button>
					<p>{requestToolTipText}</p>
				</div>
			);
		} else {
			return null;
		}
	};

	return displayFeatureButton();
};

const mapStateToProps = state => {
	return {
		features: state.initialiseFeature,
		candies: state.countCandies.candies
	};
};

export default connect(mapStateToProps)(RequestFeature);
