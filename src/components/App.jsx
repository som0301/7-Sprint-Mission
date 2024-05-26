import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import AddItem from './AddItem';
import Items from './Items';
import '../styles/fonts.css';
import '../styles/color.css';
import '../styles/reset.css';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/additem" element={<AddItem />} />
                <Route path="/items" element={<Items />} />
            </Routes>
        </Router>
    );
}

export default App;
