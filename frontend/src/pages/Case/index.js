import React from "react";
import { Link } from "react-router-dom";

import logoMando from "../../assets/logoMain@2.png";

import "./styles.css";

export default function newCase() {
  return (
    <div className="main">
      <section className="menu">
        <Link to="/cases">
          <img src={logoMando} alt="Mando" />
        </Link>
      </section>

      <section className="newCase">
        <input type="text" />
        <textarea></textarea>
      </section>
    </div>
  );
}
