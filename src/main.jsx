import GoogleAnalytics from './components/GoogleAnalytics';
import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import './style/index.css';

const htmlRoot = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(htmlRoot);

reactRoot.render(
  <React.StrictMode>
    <App />
    <GoogleAnalytics />
  </React.StrictMode>,
)
