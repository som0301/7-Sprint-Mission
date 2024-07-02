import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from 'app/styles';
import { Layout } from 'widgets/layout';
import {
  HomePage,
  ItemListPage,
  AddItemPage,
  ItemDetailPage,
  NotFoundPage,
} from 'pages';

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='items' element={<ItemListPage />}>
            <Route path=':productId' element={<ItemDetailPage />} />
          </Route>
          <Route path='additem' element={<AddItemPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
