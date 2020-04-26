import React from "react";
import { Link } from "react-router-dom";

import logoMando from "../../assets/logoMain@2.png";
import logoPerfilD from "../../assets/logoPerfilD.png";

import "./styles.css";

export default function Case() {
  return (
    <div className="main">
      <section className="menu">
        <Link to="/cases">
          <img src={logoMando} alt="Mando" />
        </Link>
      </section>

      <section className="userTopic">
        <img src={logoPerfilD} alt="TheMando" />
        <h3>Bruno Mello</h3>
      </section>

      <section className="description">
        <h1>Título do caso</h1>
        <h2>
          The Mandalorian é uma série de televisão de ópera espacial americana
          programada que estreou no Disney+ em 12 de novembro de 2019. Instalada
          no universo de Star Wars, a série acontece alguns anos após os eventos
          de Return of the Jedi e segue um solitário Gunfighter mandaloriano
          além dos limites da Nova República.
        </h2>
      </section>
    </div>
  );
}
