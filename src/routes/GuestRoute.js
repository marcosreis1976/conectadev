import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../pages/Home';
import { useSelector } from 'react-redux';

function GuestRoute({ element: Component, ...rest }) {
   const account = useSelector((state) => state.account);
   const IsAuthenticated = Boolean(account.user);
   return <Route {...rest} element={IsAuthenticated ? <Home /> : Component} />;
}

export default GuestRoute;
