import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Cart } from './components';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/cart" element={<Cart />}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
