import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/navbar.jsx';
import BaseRouter from './routes.jsx';

function App() {
	return (
		<Router>
			<Navbar />
			<div id="content">
				<BaseRouter />
			</div>
		</Router>
	);
}

export default App;
