import React from "react";

import "../../styles/shelterAnimals.css";

import { Card } from "../component/card.js";
import SOSPeludos from "../../img/sospeludos.jpeg";
import ImgTitleFavs from "../../img/imagetitlefavs.png";
import { CardPerfilShelter } from "../component/cardperfilshelter";

export const LandingShelter = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row Protectora_Protectoraprofile">
          <div className="col-xl-2 Protectora_imgprofile">
            <img
              src={<p>insertar imagen</p>}
              alt="profilephoto"
              className="Protectora_Protectoraphoto"
            />
          </div>
          <div className="col-xl-4 Protectora_ProtectoraInfo">
            <div className="row Protectora_edit">
              <div className="col-xl-12">
                <div className="Protectora_editbutton"></div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 Protectora_primayinfo">
                <p>
                  <b>
                    <span className="Protectora_labelprofileinfo">
                      Nombre:{" "}
                    </span>
                    NO MAPEADO
                  </b>
                </p>
                <p>
                  <b>
                    <span className="Protectora_labelprofileinfo">
                      Ciudad:{" "}
                    </span>
                    NO MAPEADO
                  </b>
                </p>
              </div>
              <div className="col-xl-6 Protectora_secundaryinfo">
                <p>
                  <b>
                    <span className="Protectora_labelprofileinfo">
                      Correo:{" "}
                    </span>
                    NO MAPEADO
                  </b>
                </p>
                <p>
                  <b>
                    <span className="Protectora_labelprofileinfo">
                      Direción:{" "}
                    </span>
                    NO MAPEADO
                  </b>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row shelter_titleFavs">
          <div className="col-xl-1">
            <img
              src={ImgTitleFavs}
              alt="titlecat"
              className="shelter_ImgTitleFavs"
            />
          </div>
          <div className="col-xl-2">
            <h2 className="titleShelter">
              <b>Nuestros animales</b>
            </h2>
          </div>
        </div>
        <div className="row shelter_cardlist">
          <h2>AÑADIR LAS CARDS DE ESTA PROTECTORA</h2>
        </div>
      </div>
    </>
  );
};
