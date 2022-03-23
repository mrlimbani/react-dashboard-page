import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import './App.scss';

import AppRotes from './appRoutes'


ReactDOM.render(
  <React.StrictMode>
    <AppRotes />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();