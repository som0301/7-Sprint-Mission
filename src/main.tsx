import App from './App';

// React 18 이후
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root') as HTMLDivElement;
const root = createRoot(container);
root.render(<App />);
