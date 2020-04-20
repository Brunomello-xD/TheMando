import React from "react";
import { FiLogIn } from "react-icons/fi";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./styles.css";

import logoLogin from "../../assets/logoLogin.png";
import logoMando from "../../assets/logoMain.png";

export default function Login() {
  return (
    <div className="login-container">
      <section className="form">
        <img src={logoMando} alt="Mandalorian" />

        <form>
          <h1>Faça seu Login</h1>

          <input type="email" className="email" placeholder="E-mail" />
          <input type="password" className="password" placeholder="Senha" />
          <button className="button" type="submit">
            Entrar em Mandalore
          </button>

          <section className="loginFG">
            <button className="buttonLoginFG">
              <FaFacebookF size={10} color="#FFF" />
              Facebook
            </button>
            <button className="buttonLoginFG">
              <FaGoogle size={10} color="#FFF" />
              Google
            </button>
          </section>

          <Link to="/register">
            <FiLogIn size={16} color="#395435" />
            Torne-se um Mando
          </Link>
        </form>
      </section>
      <img className="imgMando" src={logoLogin} alt="Mando" />
    </div>
  );
}
