import Nav from './components/Nav';
import './styles/reset.css';
import './styles/global.css';
import './styles/App.css';

function App({ children }) {
  return (
    <>
      <Nav />
      <div>{children}</div>
    </>
  );
}

export default App;
