import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import ItemPage from './pages/ItemPage/ItemPage'
import Header from './component-ui/layout/Header'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="items" element={<ItemPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
