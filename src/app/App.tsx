import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from 'app/styles';
import Header from 'shared/ui/header/Header';
import Home from 'pages/HomePage';
import AddItem from 'pages/AddItemPage';
import Items from 'pages/ItemsListPage';
import NotFound from 'pages/NotFoundPage';

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/items' element={<Items />} />
        <Route path='/additem' element={<AddItem />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}
