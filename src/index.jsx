import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './styles/_globals.scss';
import { ToggleContextProvider } from './context/toggleContext';
import { CursorContextProvider } from './context/cursorContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToggleContextProvider>
      <CursorContextProvider>
        <App />
      </CursorContextProvider>
    </ToggleContextProvider>
  </React.StrictMode>
);
