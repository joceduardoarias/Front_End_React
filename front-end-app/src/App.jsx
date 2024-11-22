// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Home from './pages/Home';
import PlayerPage from './pages/PlayerPage';
import EditPlayerPage from './pages/EditPlayerPage';
import AddPlayerPage from './pages/AddPlayerPage';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/NavBar';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<Navbar />} />
        </Routes>
        <Routes>
          <Route path="/players" element={<PrivateRoute element={PlayerPage} />} />
          <Route path="/edit-player/:id" element={<PrivateRoute element={EditPlayerPage} />} />
          <Route path="/add-player" element={<PrivateRoute element={AddPlayerPage} />} />
          <Route path="/" element={<PrivateRoute element={Home} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;