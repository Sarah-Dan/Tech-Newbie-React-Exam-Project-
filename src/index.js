import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import  { BrowserRouter } from 'react-router-dom';

// Wrap the App component with the BrowserRouter component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
);


