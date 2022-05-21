import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import App from '../components/App';

const DashboardRouters = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
    </>
  )
}

export default DashboardRouters;
