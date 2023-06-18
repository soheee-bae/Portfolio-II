import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './styles/_globals.scss';
import { ToggleContextProvider } from './context/toggleContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToggleContextProvider>
      <App />
    </ToggleContextProvider>
  </React.StrictMode>
);
