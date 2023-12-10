import React from 'react';
import ReactDOM from 'react-dom/client';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import SubProject, { projectLoader } from './pages/Project/SubProject';

import App from './App';
import './styles/_globals.scss';
import { ToggleContextProvider } from './context/toggleContext';
import { CursorContextProvider } from './context/cursorContext';
import { ProjectContextProvider } from './context/projectContext';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />
//   },
//   {
//     path: `/project/:projectId`,
//     element: <SubProject />,
//     loader: projectLoader
//   }
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToggleContextProvider>
      <CursorContextProvider>
        <ProjectContextProvider>
          <App />
          {/* <RouterProvider router={router} /> */}
        </ProjectContextProvider>
      </CursorContextProvider>
    </ToggleContextProvider>
  </React.StrictMode>
);
