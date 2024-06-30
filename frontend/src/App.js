import React from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import { AuthenticatedComponent } from '@asgardeo/auth-react'

function App() {
  return (
    <Router>
        <Routes>
          <Route 
            path="/" 
            element={<LandingPage />} 
          />
          <Route 
            path="/home" 
            element={<AuthenticatedComponent fallback={<Navigate to='/'/>}>
              <Home />
            </AuthenticatedComponent>} 
          />
        </Routes>
    </Router>
  );
}

export default App;
