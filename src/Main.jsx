import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './components/App';
import HomePage from './pages/HomaPage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';
import ProductListPage from './pages/ProductListPage/ProductListPage';
import ProductAddPage from './pages/ProductAddPage/ProductAddPage';
import ProductPage from './pages/ProductPage/ProductPage';
import PrivacyPage from './pages/PrivacyPage/PrivacyPage';
import FAQPage from './pages/FAQPage/FAQPage';
import PageNotFound from './pages/PageNotFound/PageNotFound';

function Main() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />}>
					<Route index element={<HomePage />} />
					<Route path='items'>
						<Route index element={<ProductListPage />} />
						<Route path=':itemId' element={<ProductPage />} />
					</Route>
					<Route path='additem' element={<ProductAddPage />} />
					<Route path='privacy' element={<PrivacyPage />} />
					<Route path='faq' element={<FAQPage />} />
					<Route path='login' element={<LoginPage />} />
					<Route path='signup' element={<SignupPage />} />
					<Route path='*' element={<PageNotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default Main;
