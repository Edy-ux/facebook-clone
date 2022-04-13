import { lazy } from 'react';
import LazyLoading from './_common/LazyLoading';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { auth } from './firebase';
import './App.css';

const HomeHeader = lazy(() => import('./components/HomeHeader'));
const Login = lazy(() => import('./components/Login'));
const Register = lazy(() => import('./components/Register'));

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(user);
      } else {
        setUser(false);
      }
    });
  });

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={LazyLoading(Login)} />
        <Route path="/sing-up" component={LazyLoading(Register)} />
        <Route path="/" component={LazyLoading(HomeHeader)}/>
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
