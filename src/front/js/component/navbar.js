import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../../front/styles/navbar.css";
import Logo_GeriAdopt_2 from "../../img/Logo_GeriAdopt_2.png";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Navbar = (props) => {
  const [isLogged, setIsLogged] = useState(false);
  const { store, actions } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLogged(true);
    }
  }, [store.logedUser]);
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light" id="muevete">
        <img
          className="logoNav"
          src={Logo_GeriAdopt_2}
          alt="Responsive image"
        />
        <Link to="/">
          <span
            className="navbarBrand spanNavbarLink"
            id="sacameelpadding"
            href="#"
          >
            GeriAdopt
          </span>
        </Link>

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
              <Link to="/quienes-somos">
                <span className="spanNavbarLink">Quienes Somos</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/alldogslist">
                <span className="spanNavbarLink">Encuentra tu Match</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/allshelters">
                <span className="spanNavbarLink">Protectoras</span>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link to="/blogsection">
                <span className="spanNavbarLink">Blog de Noticias</span>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link to="/contacto">
                <span className="spanNavbarLink">Contacto</span>
              </Link>
            </li>
            <li className="nav-item dropdown">
              {isLogged ? (
                <Link to="/perfil-member">
                  <span className="spanNavbarLink">Mi cuenta</span>
                </Link>
              ) : (
                <>
                  <Link to="/login">
                    <span className="spanNavbarLink">Iniciar sesión</span>
                  </Link>
                  <br />
                  <Link to="/formregisteruser">
                    <span className="spanNavbarLink">Registrarse</span>
                  </Link>
                </>
              )}
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
      <div className="row">
        <div className="col-md-12">
          <div className="navbar-circleone">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="120"
              height="120"
              viewBox="0 0 120 120"
            >
              <circle cx="60" cy="60" r="50" fill="#FBA0A0" />
            </svg>
          </div>
          <div className="navbar-circletwo">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="85"
              height="85"
              viewBox="0 0 120 120"
            >
              <circle cx="60" cy="60" r="50" fill=" #FFE071" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

Navbar.propTypes = {
  name: PropTypes.string,
};
