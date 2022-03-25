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
      <div className="row">
        <div className="col-md-12">
          <div className="footer-circleone">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="120"
              height="120"
              viewBox="0 0 120 120"
            >
              <circle cx="60" cy="60" r="50" fill="#FFE071" />
            </svg>
          </div>
          <div className="footer-circletwo">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="85"
              height="85"
              viewBox="0 0 120 120"
            >
              <circle cx="60" cy="60" r="50" fill="#FBA0A0" />
            </svg>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <section className="footer-foot">
        <footer>
          <div className="row foot-colum1">
            <div className="col-lg-6">
              <div className="foot-logogeri">
                <img src={logo} className="foot-chapi" alt="GeriAdopt"></img>
                <h3 className="foot-nombre">GeriAdopt</h3>
              </div>
              <p className="footer-texto">
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

            <div className="col-lg-3 foot-colum2">
              <ul className="list-unstyled mb-0">
                <li>
                  <span href="#!" className="text-white-foot">
                    Aviso legal
                  </span>
                </li>
                <li>
                  <span href="#!" className="text-white-foot">
                    Política de Privacidad
                  </span>
                </li>
                <li>
                  <span href="#!" className="text-white-foot">
                    {" "}
                    Política de cookies
                  </span>
                </li>
                <li>
                  <span href="#!" className="text-white-foot">
                    Protección de datos
                  </span>
                </li>
                <li>
                  <a
                    className="text-white-foot"
                    href="mailto:contacto@geriadopt.com?subject=Buenas tardes GeriAdopt! "
                  >
                    Contacto via email
                  </a>
                </li>
                <li>
                  <a
                    className="text-white-foot"
                    target="_blank"
                    href="https://wa.me/36555555555"
                  >
                    Contacto via WhatsApp
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 foot-colum3">
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
          <img src={perrete} className="foot-perreteBingo" alt="perrete"></img>
        </div>
      </section>
    </>
  );
};
