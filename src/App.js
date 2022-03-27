
import { lazy } from "react";



import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import LazyLoading from "./_common/LazyLoading";

/* 
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
 */
const Login = lazy(()=> import("./components/Login"))
const Register = lazy(()=> import("./components/Register"))
const Home = lazy(()=> import("./components/Home"))

function App() {
  return (

    <BrowserRouter>

      <Switch>
        <Route path="/login" component={LazyLoading(Login)} />
        <Route path="/sing-up" component={LazyLoading(Register)} />
        <Route path="/home" component={LazyLoading(Home)} />
        <Route path="/" component={LazyLoading(Login)} />
      
      </Switch>
      
    </BrowserRouter>

  );
}

export default App;
