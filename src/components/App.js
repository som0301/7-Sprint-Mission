import { Outlet } from 'react-router-dom';
import RootHeader from '../layout/RootHeader';
import RootFooter from '../layout/RootFooter';

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
