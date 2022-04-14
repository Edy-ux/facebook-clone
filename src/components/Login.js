import React, { useState } from "react";
import { auth,db} from "../firebase";
import "../Login.css";
import { Link, useHistory } from "react-router-dom";

function Login() {
  const history = useHistory("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [info, setInfo] = useState("");
  
  const login = (event) => {
    event.preventDefault();
    if (email === "" || password === "") {
      alert("Entre com um email e uma senha válidos");
      return; 
    }
    auth
      .signInWithEmailAndPassword(email, password)
      .then((a) => {
        history.push("/home");
      })
      .catch(function (error) {	
         // Handle Errors here.
        var errorCode = error.code; 
        var errorMessage = error.message;
        if (errorCode === "auth/wrong-password") {
          setInfo("Senha e/ ou email são inválidos");
        } else {
          errorMessage =	
            "Não há registro de usuário correspondente a este identificador. O usuário pode ter sido excluído ou é inexistente";
          alert(errorMessage);
         
        }

        /* 
          e.message ===
          "The password is invalid or the user does not have a password."
        ) {
          setInfo("Senha incorreta. Tente novamente");
          
        } else if (
          e.message ===
          "There is no user record corresponding to this identifier. The user may have been deleted."
        ) {
          setInfo("Email ou senha incorreta. Tente novamente");
        } */
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
        <h3>Entrar no Facebook</h3>
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

          <p style={{ fontSize: "14px", color: "red" }}>{info}</p>

          <center>
            <button onClick={login} type="submit" class="login__login">
              Entrar
            </button>
          </center>
          <center>
            <div class="sideinfo">
              <h5>Esqueceu a senha?</h5>
              <Link to="/sing-up">
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
