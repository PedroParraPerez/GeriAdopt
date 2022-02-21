import React, { Component } from "react";
import "../../styles/Footer.css";
import logo from "../../img/Logo_GeriAdopt_2E.png";
import perrete from "../../img/perrete foot.com_1.png";

export const Footer = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <section className="foot">
        <footer>
          <div className="row colum1">
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <div className="logogeri">
                <img src={logo} className="chapi" alt="GeriAdopt"></img>
                <h3 className="nombrefoot">GeriAdopt</h3>
              </div>
              <p>
                Con el fin de ofrecer a nuestros animales un hogar acorde a sus
                necesidades y caracteristicas hemos trabajado en este proyecto
                en el cual se podrá enlazar cada uno de los animales en las
                diferentes protectoras registradas con el adoptante que sea más
                acorde con el animal. Nuestro objetivo es ser la plataforma de
                adopción de referencia a nivel nacional.
              </p>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0 colum2">
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Aviso legal
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Política de Privacidad
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    {" "}
                    Política de cookies
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Protección de datos
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0 colum3">
              <img src={perrete} className="perrete" alt="perrete"></img>
              <br />
              iconos
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};
