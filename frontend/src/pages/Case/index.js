import React from "react";
import { Link } from "react-router-dom";
import { FiMessageSquare } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import logoMando from "../../assets/logoMain@2.png";
import imgPerfil from "../../assets/imgPerfil.png";

import "./styles.css";

export default function Case() {
  return (
    <div className="main">
      <div className="mainMenu">
        <section className="contact">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Brunomello-xD"
          >
            <FaGithub className="github" size={12} color="#010601" />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Brunomello-xD"
          >
            <h1 className="github">GitHub</h1>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/bruno-mello-14058819b/"
          >
            <FaLinkedin className="linkedin" size={12} color="#0c77b6" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/bruno-mello-14058819b/"
          >
            <h1 className="linkedin">LinkedIn</h1>
          </a>
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

      <section className="userTopic">
        <img src={imgPerfil} alt="TheMando" />
        <h3>RestlinMagnat</h3>
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

      <section className="actions">
        <textarea cols="30" rows="10"></textarea>

        <button>
          <FiMessageSquare size={18} color="black" />
          Responder
        </button>
      </section>

      <section className="comments">
        <ul>
          <li>
            <p>RestlinMagnat</p>
            <strong>Isto é um comentário</strong>
          </li>
        </ul>
      </section>
    </div>
  );
}
