import React, { Component } from "react";
import "../../styles/Footer.css";
import logo from "../../img/logoblanco.png";
import perrete from "../../img/perrete foot.com_1.png";
import facebook from "../../img/facebook.png";
import twitter from "../../img/twitter.png";
import instagram from "../../img/instagram.jpeg";

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
          <div className="row colum1foot">
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <div className="logogerifoot">
                <img src={logo} className="chapifoot" alt="GeriAdopt"></img>
                <h3 className="nombrefoot">GeriAdopt</h3>
              </div>
              <p className="textofooter">
                <b>
                  Con el fin de ofrecer a nuestros animales un hogar acorde a
                  sus necesidades y caracteristicas hemos trabajado en este
                  proyecto en el cual se podrá enlazar cada uno de los animales
                  en las diferentes protectoras registradas con el adoptante que
                  sea más acorde con el animal. Nuestro objetivo es ser la
                  plataforma de adopción de referencia a nivel nacional.
                </b>
              </p>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0 colum2foot">
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white-foot">
                    Aviso legal
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white-foot">
                    Política de Privacidad
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white-foot">
                    {" "}
                    Política de cookies
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white-foot">
                    Protección de datos
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white-foot">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0 colum3foot">
              <div className="iconosfooter"></div>
              <img
                src={instagram}
                className="iconoigfooter"
                alt="instagramlogo"
              ></img>
              <img
                src={twitter}
                className="iconotwfooter"
                alt="twitterlogo"
              ></img>
              <img
                src={facebook}
                className="iconofbfooter"
                alt="facebooklogo"
              ></img>
              <br />
            </div>
          </div>
        </footer>
        <div>
          <img src={perrete} className="perreteBingofoot" alt="perrete"></img>
        </div>
      </section>
    </>
  );
};
