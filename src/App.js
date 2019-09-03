import React from 'react';
import './App.css';
import CandyBox from './views/CandyBox';

import SaveView from './views/SaveView';
import ConfigView from './views/ConfigView';
import InventoryView from './views/InventoryView';
import MapView from './views/MapView';

import DisplayHeader from './components/header/DisplayHeader';

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<DisplayHeader></DisplayHeader>
			<Route path='/' exact component={CandyBox} />
			<Route path='/save/' component={SaveView} />
			<Route path='/config/' component={ConfigView} />
			<Route path='/inventory/' component={InventoryView} />
			<Route path='/map/' component={MapView} />
		</Router>
	);
}

export default App;
