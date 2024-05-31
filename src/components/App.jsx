import React from 'react';
import { Outlet } from 'react-router-dom';
import RootHeader from '../layout/RootHeader';
import RootFooter from '../layout/RootFooter';
import '../assets/css/reset.css';
import '../assets/css/common.css';
import '../assets/css/form.css';

function App() {
	return (
		<>
			<RootHeader />
			<main id='container'>
				<Outlet />
			</main>
			<RootFooter />
		</>
	);
}

export default App;
