import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";
import { Navbar } from "../component/navbar.js";
import { Footer } from "../component/footer.js";
import FamilyAdopted from "../../img/FamilyAdopted.png";
import HeartHeader from "../../img/HeartHeader.png";
import twoLives from "../../img/twoLives.png";
import adoption from "../../img/adoption.png";
import dogWalking from "../../img/dogWalking.png";
import AdopterHome from "../../img/AdopterHome.jpeg";
import ProtectoraHome from "../../img/ProtectoraHome.jpg";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="container-fluid">
        <div className="row containerHeader">
          <div className="col-md-1"></div>
          <div className="col-md-5">
            <h2 className="textoHeader">
              ¡En GeriAdopt Puedes Encontrar Tu Peludo Ideal! Únete a Nuestra
              Comunidad y suma un miembro a tu familia
            </h2>
            <img className="heartHeader" src={HeartHeader} alt="heart" />
            <button type="button" className="btn buttonHeader">
              ¡Encuentra tu Match!
            </button>
          </div>
          <div className="col-md-5">
            <img
              className="familyHeader"
              src={FamilyAdopted}
              alt="Family Adopted"
            />
          </div>
          <div className="col-md-1"></div>
        </div>
        <div className="row middleBar">
          <div className="row">
            <h3 className="benefits">Beneficios de Adoptar un Animal</h3>
          </div>
          <div className="col-md-4">
            <div className="divIconText">
              <img
                className="middleBarIcon"
                src={twoLives}
                alt="salvas dos vidas"
              />
              <p className="textmiddleBar">
                Salvas dos vidas, la del animal que adoptas y la del nuevo
                rescatado
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="divIconText">
              <img
                className="middleBarIcon"
                src={adoption}
                alt="amor de adopción"
              />
              <p className="textmiddleBar">
                Los animales rescatados son muy agradecidos y notarás su amor al
                adoptar
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="divIconText">
              <img
                className="middleBarIcon"
                src={dogWalking}
                alt="paseando el perro"
              />
              <p className="textmiddleBar">
                Caminar a diario con tu perro te permitira tener una vida más
                activa y sana
              </p>
            </div>
          </div>
        </div>

        <div className="row d-flex justify-content-between ">
          <div className="col-md-1"></div>
          <div className="col-md-4">
            <div className="cardContainer">
              <img
                src={AdopterHome}
                className="card-img-top cardPic"
                alt="perfil adoptante"
              />
              <div className="card-body cardBody">
                <p className="card-text cardText">
                  En GeriAdopt encuentra a tu peludo ideal y suma un miembro más
                  a tu familia. Encuentra, enamorate y contacta con la
                  protectora, asi de simple. ¡Crea tu perfil con nosotros!
                </p>

                <a href="#" className="btnText">
                  ¡Quiero Adoptar!
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="cardContainer">
              <img
                src={ProtectoraHome}
                className="card-img-top cardPic"
                alt="perfil protectora"
              />
              <div className="card-body cardBody">
                <p className="card-text cardText">
                  En GeriAdopt encuentra a tu peludo ideal y suma un miembro más
                  a tu familia. Encuentra, enamorate y contacta con la
                  protectora, asi de simple. ¡Crea tu perfil con nosotros!
                </p>

                <a href="#" className="btnText">
                  Quiero registar mi Protectora
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>

        <div className="row rowQuote">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <h4>
              “Hasta que no hayas amado a un animal, una parte de tu alma
              permanecerá dormida” <br />
              -Anatole France
            </h4>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </>
  );
};
