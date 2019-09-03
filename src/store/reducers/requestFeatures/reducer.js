const initialState = {
	displayFeatureButton: false,
	hideFeatureButton: false,
	displayCandyBox: false,
	displayConfig: false,
	displaySave: false,
	displayHealth: false,
	displayMap: false,
	allFeaturesImplemented: false

	//inventory?
};

function initialiseFeature(state = initialState, action) {
	switch (action.type) {
		case 'DISPLAYFEATUREBUTTON':
			return { ...state, displayFeatureButton: true };
		case 'HIDEFEATUREBUTTON':
			return { ...state, hideFeatureButton: true };
		case 'DISPLAYCANDYBOX':
			return { ...state, displayCandyBox: true };
		case 'DISPLAYCONFIG':
			return { ...state, displayConfig: true };
		case 'DISPLAYSAVE':
			return { ...state, displaySave: true };
		case 'DISPLAYHEALTH':
			return { ...state, displayHealth: true };
		case 'DISPLAYMAP':
			return { ...state, displayMap: true };
		case 'ALLFEATURESIMPLEMENTED':
			return { ...state, allFeaturesImplemented: true };
		default:
			return state;
	}
}

export default initialiseFeature;
