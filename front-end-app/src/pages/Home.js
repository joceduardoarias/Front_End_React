import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Football Players App</h1>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/players">View Players</Link>
    </div>
  );
};

export default Home;