import React, { useState } from "react";
import { auth } from "./firebase";
import "./Login.css";
import {
  BrowserzRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

function Login() {
  const history = useHistory("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/register");
      })
      .catch((e) => {
        if (
          e.message ===
          "The password is invalid or the user does not have a password."
        ) {
          alert("Email ou senha incorreta. Tente novamente");
        } else if (
          e.message ===
          "There is no user record corresponding to this identifier. The user may have been deleted."
        ) {
          alert("Email ou senha incorreta. Tente novamente");
        } else {
          alert(e.message);
        }
      });
  };


  
  return (
    <div className="login">
      <img
        src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
        class="login__logo"
        alt="logo-facebook"
      />
      <div className="login__container">
        {/*  <h3>Entrar no Facebook</h3> */}
        <form>
          <center>
            <input
              type="email"
              placeholder="Email ou telefone"
              onChange={(e) => setEmail(e.target.value)}
            />
          </center>
          <center>
            <input
              type="password"
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
            />
          </center>
          <center>
            <button onClick={login} type="submit" class="login__login">
              Entrar
            </button>
          </center>
          <center>
            <div class="sideinfo">
              <h5>Esqueceu a senha?</h5>
              <Link to="/register">
                <button class="rtd" style={{ textDecoration: "none" }}>
                  Criar nova conta
                </button>
              </Link>
            </div>  
          </center>
        </form>
      </div>
    </div>
  );
}

export default Login;
