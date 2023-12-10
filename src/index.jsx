import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/_globals.scss';
import { BrowserRouter } from 'react-router-dom';

import { ToggleContextProvider } from './context/toggleContext';
import { CursorContextProvider } from './context/cursorContext';
import { ProjectContextProvider } from './context/projectContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ToggleContextProvider>
        <CursorContextProvider>
          <ProjectContextProvider>
            <App />
          </ProjectContextProvider>
        </CursorContextProvider>
      </ToggleContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
