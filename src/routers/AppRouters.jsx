import React, { useState, useEffect } from 'react';
import '../styles/AppRouters.css';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import '../styles/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PublicRouters } from './PublicRouters';
import { PrivateRouters } from './PrivateRouters';
import DashboardRouters from '../routers/DashboardRouters';
import Login from '../components/Login';
import Register from '../components/Register';

function AppRouters() {
  const [checking, setChecking] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        setIsLoggedIn(true)
      }
      else {
        setIsLoggedIn(false)
      }
      setChecking(false)
    })
  }, [setIsLoggedIn, setChecking])

  if (checking) {
    return (
      <h1>Espere....</h1>
    )
  }

  return (
    <div className='AppRouters'>
      <Router>
        <Routes>
        <Route path='/login' element={
              <PublicRouters isAuth={isLoggedIn}>
                <Login />
              </PublicRouters>
            } />
            <Route path="/register" element={
              <PublicRouters isAuth={isLoggedIn}>
                <Register />
              </PublicRouters>
            } />
            <Route path="/*" element={
              <PrivateRouters isAuth={isLoggedIn}>
                <DashboardRouters />
              </PrivateRouters>
            } />
        </Routes>
      </Router>
    </div>
  );
}

export default AppRouters;
