import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/QuienesSomos.css";
import quienesSomos from "../../img/quienesSomos.jpg";
import quienesSomosDos from "../../img/quienesSomosDos.jpg";
import dogadoptedQSomos from "../../img/dogadoptedQSomos.jpg";
import hearts from "../../img/hearts.png";
import equipoGeriAdopt from "../../img/equipoGeriAdopt.jpg";
import picCircleQuienesSomos from "../../img/picCircleQuienesSomos.jpg";

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
                src={equipoGeriAdopt}
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
              <br />
              Buscamos crear una plataforma que sea un medio atractivo para la
              difusión de animales en adopción, <br />
              que se encuentran esperando una familia en protectoras de España.
            </h4>
          </div>
          <div className="col-md-1"></div>
        </div>

        <div className="row middleBarQuienesSomos">
          <div className="col-md-4">
            <div className="textCenterMision">
              <h4 className="misTitle">Nuestra Misión</h4>
              <p className="misText">
                Conectar adoptantes con protectoras para incrementar y fomentar
                la adopción animal a nivel nacional, de una manera más accesible
              </p>
            </div>
          </div>
          <div className="col-md-2 d-flex justify-content-center">
            <img
              className="picQuienesSomosDos"
              src={picCircleQuienesSomos}
              alt="quienes somos"
            />
          </div>
          <div className="col-md-4">
            <div className="textCenterMision">
              <h4 className="proTitle">Nuestra Promesa</h4>
              <p className="proText">
                Incrementar la visibilidad del mundo de la adopción animal,
                crear conciencia, difundir eventos y aumentar el número de
                adopciones
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-2">
            <div className="centerDogAdoptedQuienesSomos">
              <img
                className="heartsSidesQuienesSomos"
                src={hearts}
                alt="hearts to the sides"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="centerDogAdoptedQuienesSomos">
              <img
                className="adoptedDogQuienesSomos"
                src={dogadoptedQSomos}
                alt="dog that was adopted"
              />
              <h4 className="dudasSuge">¿Tienes dudas o sugerencias?</h4>
              <Link to="/contactus">
                <button className="contactQuienesSomos">Contáctanos</button>
              </Link>
            </div>
          </div>
          <div className="col-md-2">
            <div className="centerHeartsSidesQuienesSomos">
              <img
                className="heartsSidesQuienesSomos"
                src={hearts}
                alt="hearts to the sides"
              />
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </>
  );
};
