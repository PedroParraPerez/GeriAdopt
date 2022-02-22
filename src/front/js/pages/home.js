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

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="containe-fluid">
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
      </div>
    </>
  );
};
