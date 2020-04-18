import React from "react";

import lightSaber from "../../assets/light-saber.png";
import lightSaber1 from "../../assets/light-saber-1.png";

import "./styles.css";

export default function Register() {
  return (
    <div className="registerContainer">
      <img src={lightSaber1} alt="Mando" />
      <section className="form">
        <div>
          <form>
            <h1>Cadastro</h1>
            <input placeholder="Nome" />
            <input placeholder="Nome de usuário" />
            <input type="email" placeholder="E-mail" />
            <input type="password" placeholder="Senha" />
            <button className="button">Tornar-se um Mandaloriano</button>
          </form>
        </div>
      </section>
    </div>
  );
}
