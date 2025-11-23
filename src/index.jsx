import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/_globals.scss';
import { BrowserRouter } from 'react-router-dom';

import { ToggleContextProvider } from './context/toggleContext';
import { CursorContextProvider } from './context/cursorContext';
import { ProjectContextProvider } from './context/projectContext';
import { LanguageContextProvider } from './context/languageContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LanguageContextProvider>
        <ToggleContextProvider>
          <CursorContextProvider>
            <ProjectContextProvider>
              <App />
            </ProjectContextProvider>
          </CursorContextProvider>
        </ToggleContextProvider>
      </LanguageContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
