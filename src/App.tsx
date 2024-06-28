import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'
import ItemPage from './Pages/ItemPage/ItemPage'
import AddItemPage from './Pages/AddItemPage/AddItemPage'
import Header from './component-ui/layout/Header'
import ItemDetailPage from './Pages/ItemDetailPage/itemDetailPage'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="items">
            <Route index element={<ItemPage />} />
            <Route path=":productId" element={<ItemDetailPage />} />
          </Route>
          <Route path="additem" element={<AddItemPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
