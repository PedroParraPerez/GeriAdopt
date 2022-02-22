import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";
import { Navbar } from "../component/navbar.js";
import { Footer } from "../component/footer.js";
import FamilyAdopted from "../../img/FamilyAdopted.png";
import HeartHeader from "../../img/HeartHeader.png";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="containe-fluid">
        <div className="row containerHeader">
          <div className="col-md-1"></div>
          <div className="col-md-5">
            <h2 className="textoHeader">
              ¡En GeriAdopt Puedes Encontrar Tu Peludo Ideal! Unete a Nuestra
              Comunidad y suma un miembro a tu familia
            </h2>
            <img className="heartHeader" src={HeartHeader} alt="heart" />
            <button className="buttonHeader">¡Encuentra tu Match!</button>
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
          <h3 className="beneficios">Beneficios de Adoptar un Animal</h3>
          <div className="col-md-4">HOLA</div>
          <div className="col-md-4"> HOLA</div>
          <div className="col-md-4"> HOLA </div>
        </div>
      </div>
    </>
  );
};
