import React from "react";
import { FiSearch, FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

import "./styles.css";

import logoMando from "../../assets/logoMain@2.png";

export default function Cases() {
  return (
    <div className="main">
      <section className="menu">
        <Link to="/cases">
          <img src={logoMando} alt="Mando" />
        </Link>

        <section className="userSearch">
          <input className="search" type="text" placeholder=" Pesquisar" />
          <FiSearch size={18} />
        </section>
      </section>

      <section className="newCase">
        <Link to="/newcase">
          <button className="newCase">
            <FiPlus size={26} />
          </button>
        </Link>
        <h3>Novo Tópico</h3>
      </section>

      <section className="cases">
        <Link className="case" to="/case">
          Primeiros passos de um Mandaloriano
        </Link>
        <hr color="black" size={1} />
        <Link className="case" to="/case">
          Primeiros passos de um Mandaloriano
        </Link>
        <hr color="black" size={1} />
      </section>
    </div>
  );
}
