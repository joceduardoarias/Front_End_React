// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import Logout from '../components/Auth/Logout';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Football Players App</h1>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/players">View Players</Link>
      <Logout />
    </div>
  );
};

export default Home;