import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

import React from 'react'

const PrivateRoute = () => {
    const currentUser  = useSelector(state => state.auth.user.username);
    return currentUser ? <Outlet /> : <Navigate to="/login" replace />;
}

export default PrivateRoute
