import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({ element: Component }) => {
  const { auth } = useContext(AuthContext);
  return auth ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;