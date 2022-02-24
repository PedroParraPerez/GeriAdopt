import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/QuienesSomos.css";
import quienesSomos from "../../img/quienesSomos.jpg";
import quienesSomosDosFinal from "../../img/quienesSomosDosFinal.png";

export const QuienesSomos = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <div className="lineQuienesSomos">
              <h1 className="titleQuienesSomos">Quienes Somos</h1>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>

        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <div className="centerPicQuienesSomos">
              <img
                className="picQuienesSomos"
                src={quienesSomos}
                alt="quienes somos"
              />
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>

        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <h4 className="textoQuienesSomos">
              Somos un grupo de programadores que amamos a los animales,
              conscientes de la realidad actual que afecta al bienestar animal.
              Buscamos crear una plataforma que sea un medio atractivo para la
              difusión de animales en adopción, que se encuentran esperando una
              familia en protectoras de España.
            </h4>
          </div>
          <div className="col-md-1"></div>
        </div>

        <div className="row middleBarQuienesSomos">
          <div className="row">
            <img
              className="picQuienesSomosDos"
              src={quienesSomosDosFinal}
              alt="quienes somos"
            />
          </div>
          <div className="col-md-"></div>
        </div>
      </div>
    </>
  );
};
