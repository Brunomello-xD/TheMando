import React from "react";
import { FiSearch } from "react-icons/fi";

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
          <h1>Bruno</h1>
        </section>
      </section>
      <section></section>
    </div>
  );
}
