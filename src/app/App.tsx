import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { GlobalStyle } from 'app/styles';

import { AddItemPage, HomePage, ItemDetailPage, ItemListPage, NotFoundPage } from 'pages';

import { Layout } from 'widgets/layout';

import { useHandleResize } from 'shared/hook/useHandleResize';

export default function App() {
  useHandleResize();
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
