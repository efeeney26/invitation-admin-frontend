import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';

import { getCookieValue } from '../../utils';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const isAuth = getCookieValue('auth_inv');

  if (!isAuth) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
