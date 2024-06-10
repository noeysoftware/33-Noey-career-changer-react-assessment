import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Owner from './Owner';
import './index.css'
import { EmployeesProvider } from './employees';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'owner',
        element: <Owner />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <EmployeesProvider>
      <RouterProvider router={router} />
      </EmployeesProvider>
  </React.StrictMode>
);
