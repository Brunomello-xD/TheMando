import React from "react";
import { FiLogIn } from "react-icons/fi";

import "./styles.css";

import mando from "../../assets/logoxd.png";
import logoMando from "../../assets/logo.png";

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
            Entrar
          </button>

          <a href="/register">
            <FiLogIn size={16} color="#3d4e32" />
            Não tenho cadastro
          </a>
        </form>
      </section>
      <img className="imgMando" src={mando} alt="Mando" />
    </div>
  );
}
