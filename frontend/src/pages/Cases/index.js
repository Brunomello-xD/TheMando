import React from "react";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

import "./styles.css";

import logoMando from "../../assets/logoMain@2.png";

export default function Cases() {
  return (
    <div className="main">
      <section className="menu">
        <img src={logoMando} alt="Mando" />

        <section className="userSearch">
          <FiSearch size={18} />
          <input className="search" type="text"></input>
        </section>
      </section>
      <section className="cases">
        <Link to="/case">Primeiros passos de um Mandaloriano</Link>
        <hr color="black" size={1} />
        <Link to="/case">Primeiros passos de um Mandaloriano</Link>
        <hr color="black" size={1} />
        <Link to="/case">Primeiros passos de um Mandaloriano</Link>
        <hr color="black" size={1} />
        <Link to="/case">Primeiros passos de um Mandaloriano</Link>
        <hr color="black" size={1} />
      </section>
    </div>
  );
}
