// -----------------------------------------------------------------------------
// main.tsx — application entry point.
// Author: Maria Martina Carballo Diaz
// -----------------------------------------------------------------------------

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './styles/index.css';

// Base path used for local development and deployment.
const routerBasename =
  import.meta.env.BASE_URL.replace(/\/$/, '') || '/';

const rootElement = document.getElementById('root')!;

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter basename={routerBasename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);