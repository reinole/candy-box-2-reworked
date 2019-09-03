export const loadState = () => {
	try {
		const serializedState = localStorage.getItem('player');
		console.log(JSON.parse(serializedState));
		if (serializedState === null) {
			return undefined;
		}

		return JSON.parse(serializedState);
	} catch (err) {
		return undefined;
	}
};

export const saveState = state => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem('player', serializedState);
	} catch {
		console.log('Error in saveState');
	}
};

// export const loadState = () => {
// 	try {
// 		console.log(localStorage);
// 		const serializedState = localStorage.getItem();
// 		console.log(serializedState);

// 		if (serializedState === null) {
// 			return undefined;
// 		}

// 		return JSON.parse(serializedState);
// 	} catch (err) {
// 		console.log('Error in loadState', err);
// 		return undefined;
// 	}
// };

// export const saveState = (key, state) => {
// 	try {
// 		const serializedState = JSON.stringify(state);
// 		localStorage.setItem(key, serializedState);
// 	} catch {
// 		console.log('Error in saveState');
// 	}
// };
