import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import './styles/_globals.scss';
import { ToggleContextProvider } from './context/toggleContext';
import { CursorContextProvider } from './context/cursorContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: `/project/:projectId`,
    element: <div></div>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToggleContextProvider>
      <CursorContextProvider>
        {/* <App /> */}
        <RouterProvider router={router} />
      </CursorContextProvider>
    </ToggleContextProvider>
  </React.StrictMode>
);
