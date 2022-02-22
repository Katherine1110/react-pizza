import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Cart } from './components';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Provider store={store}>
          <Route path="/" element={<App />} />
          <Route path="/cart" element={<Cart />} />
        </Provider>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
