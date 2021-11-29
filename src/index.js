import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './styles.css';

import AppRoutes from './routes';
import Header from './components/Header';

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <AppRoutes />
  </BrowserRouter>,
  document.getElementById('root'),
);
