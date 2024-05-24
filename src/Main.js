import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './components/App';
import HomePage from './pages/HomaPage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';
import PrivacyPage from './pages/PrivacyPage/PrivacyPage';
import FAQPage from './pages/FAQPage/FAQPage';
import ProductPage from './pages/ProductPage/ProductPage';

function Main() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />}>
					<Route index element={<HomePage />} />
					<Route path='privacy' element={<PrivacyPage />} />
					<Route path='faq' element={<FAQPage />} />
					<Route path='items' element={<ProductPage />} />
				</Route>
				<Route path='/login' element={<LoginPage />} />
				<Route path='/signup' element={<SignupPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Main;
