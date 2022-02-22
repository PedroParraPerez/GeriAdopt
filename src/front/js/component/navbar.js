import React from "react";
import { Link } from "react-router-dom";
import "../../../front/styles/navbar.css";
import Logo_GeriAdopt_2 from "../../img/Logo_GeriAdopt_2.png";
import PropTypes from "prop-types";

export const Navbar = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light" id="muevete">
        <img
          className="logoNav"
          src={Logo_GeriAdopt_2}
          alt="Responsive image"
        />

        <a className="navbar-brand" id="sacameelpadding" href="#">
          GeriAdopt
        </a>

        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#MenuNavegacion"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="MenuNavegacion" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-3 enlaces">
            <li className="nav-item">
              <Link to="/">
                <span classNameName="quienesSomos">Quienes Somos</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/demo">
                <span classNameName="tuMatch">Encuentra tu Match</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/demo">
                <span classNameName="protectoras">Protectoras</span>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link to="/demo">
                <span classNameName="blog">Blog de Noticias</span>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link to="/demo">
                <span classNameName="contacto">Contacto</span>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link to="/demo">
                <span classNameName="iniciar">Iniciar Sesión</span>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link to="/demo">
                <span classNameName="registro">Registrate</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 193">
        <path
          fill="#F5B89F"
          d="M0,64L30,96C60,128,120,192,180,186.7C240,181,300,107,360,85.3C420,64,480,96,540,112C600,128,660,128,720,112C780,96,840,64,900,53.3C960,43,1020,53,1080,85.3C1140,117,1200,171,1260,186.7C1320,203,1380,181,1410,170.7L1440,160L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
        ></path>
      </svg>
    </>
  );
};

Navbar.propTypes = {
  name: PropTypes.string,
};
