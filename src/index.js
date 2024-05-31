import React from "react";
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles/global.css"; 




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // 5.29 React.StrictMode는 개발 중 더 안전하고 안정적인 React 애플리케이션을 작성하는 데 유용한 도구
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


