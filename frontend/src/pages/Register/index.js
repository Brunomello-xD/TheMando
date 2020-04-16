import React from "react";
import { FiLogOut } from "react-icons/fi";

import "./styles.css";

export default function Register() {
  return (
    <div className="registerContainer">
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
