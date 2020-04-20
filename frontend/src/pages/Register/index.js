import React from "react";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

import lightSaber from "../../assets/logoRegister.png";

import "./styles.css";

export default function Register() {
  return (
    <div className="registerContainer">
      <img src={lightSaber} alt="Mando" />
      <section className="form">
        <div>
          <form>
            <h1>Cadastro</h1>
            <input placeholder="Nome" />
            <input placeholder="Nome de usuário" />
            <input type="email" placeholder="E-mail" />
            <input type="password" placeholder="Senha" />
            <button className="button">Tornar-se um Mandaloriano</button>
            <Link to="/">
              <FiLogIn size={16} color="#395435" />
              Já tenho cadastro
            </Link>
          </form>
        </div>
      </section>
    </div>
  );
}
