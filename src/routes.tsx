import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import TelevisionPage from './pages/TelevisionPage';
import WashingMachinePage from './pages/WashingMachinePage';
import AirConditionerPage from './pages/AirConditionerPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'television',
        element: <TelevisionPage />,
      },
      {
        path: 'washingmachine',
        element: <WashingMachinePage />,
      },
      {
        path: 'airconditioner',
        element: <AirConditionerPage />,
      },
      {
        path: 'products',
        element: <TelevisionPage />, // Temporarily using TelevisionPage as a placeholder
      },
      {
        path: 'about',
        element: <div className="container mx-auto px-4 py-16"><h1 className="text-3xl font-bold">About Us</h1></div>,
      }
    ]
  }
]);

export default router; 