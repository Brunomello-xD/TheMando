import React from "react";

import "./styles.css";

export default function Register() {
  return (
    <div className="registerContainer">
      <section>
        <form>
          <h1>Cadastro</h1>
          <input placeholder="Nome" />
          <inp type="email" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <button>Tornar-se um Mando</button>
        </form>
      </section>
    </div>
  );
}
