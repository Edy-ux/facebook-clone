import { lazy } from 'react';

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import LazyLoading from './_common/LazyLoading';
import { auth } from "./firebase";
import './App.css';

/* 
import Login from "/Login";
import Register from "./Register";
import Home from "./Home";
 */
const Home = lazy(() => import('./components/Home'));
const HomeHeader = lazy(() => import('./components/HomeHeader'));
const Login = lazy(() => import('./components/Login'));
const Register = lazy(() => import('./components/Register'));

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
    if(authUser){
      setUser(user)
    } else {
      setUser(false)
    }
    })
  });

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={LazyLoading(Login)} />
        <Route path="/sing-up" component={LazyLoading(Register)} />
        <Route path="/home" component={LazyLoading(Home)} />
        <Route
          path="/Header"
          component={LazyLoading(<HomeHeader user={user} selected/>)}
        />
        <Route path="/" component={LazyLoading(HomeHeader)} />
      
      </Switch>
    </BrowserRouter>
  );
}

export default App;
