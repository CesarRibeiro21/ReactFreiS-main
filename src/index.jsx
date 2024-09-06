import React from 'react';
import ReactDOM from 'react-dom/client';
import { Navigation } from './routes';

import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navigation />
  </React.StrictMode>
);
