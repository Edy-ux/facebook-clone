import { lazy } from 'react';
import LazyLoading from './_common/LazyLoading';
import React  from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

const HomeHeader = lazy(() => import('./components/Home'));
const Login = lazy(() => import('./components/Login'));
const Register = lazy(() => import('./components/Register'));
  
function App() {




  return (
    <BrowserRouter>
      <Switch>
       
        <Route path="/sing-up" component={LazyLoading(Register)} />
        <Route path="/home" component={LazyLoading(HomeHeader)}/>
        <Route path="/" component={LazyLoading(Login)} />
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
