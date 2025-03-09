import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import React from 'react';

const PrivateRoute = () => {
    const user = useSelector(state => state.auth.user);
    const currentUser = user ? user.username : null;
    return currentUser ? <Outlet /> : <Navigate to="/login" replace />;
}

export default PrivateRoute;