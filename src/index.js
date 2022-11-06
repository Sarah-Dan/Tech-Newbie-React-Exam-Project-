import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import  { BrowserRouter } from 'react-router-dom';
import AuthProvider from './AuthProvider';
import { HelmetProvider } from 'react-helmet-async';

// Wrap the App component with the BrowserRouter component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
    <App />
    </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
  </BrowserRouter>
);


