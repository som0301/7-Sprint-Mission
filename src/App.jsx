import Nav from './components/Nav';
import './styles/reset.css';
import './styles/App.css';

function App({ children }) {
  return (
    <>
      <Nav />
      {children}
    </>
  );
}

export default App;
