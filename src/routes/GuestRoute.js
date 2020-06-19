import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../pages/Home';
import authService from '../services/authService';
import authservice from '../services/authService';

function GuestRoute({element: Component, ...rest}) {
    const IsAuthenticated = authservice.isAuthenticated();
    
    return (
        <Route {...rest} element={(
            IsAuthenticated
            ? <Home />
            : Component
        )}
        
        />
    )
}

export default GuestRoute;