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
      }
    ]
  }
]);

export default router; 