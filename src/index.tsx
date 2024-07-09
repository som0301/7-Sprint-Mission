import ReactDOM from 'react-dom/client';
import Main from './Main';
import './index.css';
import './styles/reset.scss';
import './styles/global.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<Main />);
