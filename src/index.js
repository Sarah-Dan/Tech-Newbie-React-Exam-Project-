import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import  { BrowserRouter } from 'react-router-dom';
import AuthProvider from './AuthProvider';

// Wrap the App component with the BrowserRouter component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <AuthProvider>
    <App />
    </AuthProvider>
  </React.StrictMode>
  </BrowserRouter>
);


