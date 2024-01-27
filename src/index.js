import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './style/index.css';
import App from './App';
import reportWebVitals from "./reportWebVitals";
import RootLayout from './components/toast';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RootLayout/>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();