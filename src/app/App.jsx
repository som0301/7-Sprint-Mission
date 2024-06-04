import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from 'app/styles/GlobalStyle';
import Header from 'shared/ui/header/Header';
import AddItem from 'pages/additem/AddItemPage';
import Items from 'pages/items/ItemsPage';
import NotFound from 'shared/ui/notfound/NotFound';

function App() {
    return (
        <Router>
            <GlobalStyle />
            <Header />
            <Routes>
                <Route path="/" exact element={<Items />} />
                <Route path="/items" element={<Items />} />
                <Route path="/additem" element={<AddItem />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
