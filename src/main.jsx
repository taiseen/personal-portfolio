import GoogleAnalytics from './components/GoogleAnalytics';
import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import './style/index.scss';

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <React.StrictMode>
      <App />
      <GoogleAnalytics />
    </React.StrictMode>,
  )
