import React from "react";
import { FiPlus } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./styles.css";

import imgPerfil from "../../assets/imgPerfil.png";
import logoMando from "../../assets/logoMain@2.png";

export default function Cases() {
  return (
    <div className="main">
      <div className="mainMenu">
        <section className="contact">
          <a href="https://github.com/Brunomello-xD" target="_blank">
            <FaGithub className="github" size={12} color="#010601" />
          </a>
          <h1 className="github">GitHub</h1>

          <a
            href="https://www.linkedin.com/in/bruno-mello-14058819b/"
            target="_blank"
          >
            <FaLinkedin className="linkedin" size={12} color="#0c77b6" />
          </a>
          <h1 className="linkedin">LinkedIn</h1>
        </section>
        <section className="menu">
          <Link to="/cases">
            <img src={logoMando} alt="Mando" />
          </Link>
          <Link className="perfil" to="/pefil">
            <img src={imgPerfil} alt="ThePerfil" />
          </Link>
        </section>
      </div>

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
