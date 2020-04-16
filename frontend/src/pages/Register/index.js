import React from "react";

import RegisterLogo from "../../assets/logoRegister.png";
import lightSaber from "../../assets/light-saber.png";

import "./styles.css";

export default function Register() {
  return (
    <div className="registerContainer">
      <img src={lightSaber} alt="Mando" />
      <section className="form">
        <form>
          <h1>Cadastro</h1>
          <input placeholder="Nome" />
          <input placeholder="Nome de usuário" />
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <button className="button">Tornar-se um Mandaloriano</button>
        </form>
      </section>
    </div>
  );
}
