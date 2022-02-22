import React from "react";

import "../../styles/adopter.css";

import { Card } from "../component/card.js";
import GirlPhoto from "../../img/girlphoto.jpg";
import EditIcon from "../../img/editIcon.png";
import ImgTitleFavs from "../../img/imagetitlefavs.png";

export const Adopter = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row adopterprofile">
          <div className="col-xl-2 imgprofile">
            <img src={GirlPhoto} alt="profilephoto" className="adopterphoto" />
          </div>
          <div className="col-xl-4 adopterInfo">
            <div className="row edit">
              <div className="col-xl-12">
                <div className="editbutton">
                  <img src={EditIcon} className="editicon" alt="editIcon" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 primayinfo">
                <p>
                  <b>
                    <span className="labelprofileinfo">Nombre: </span>Maria
                  </b>
                </p>
                <p>
                  <b>
                    <span className="labelprofileinfo">Apellidos: </span>
                    Gutierrez Mola
                  </b>
                </p>
                <p>
                  <b>
                    <span className="labelprofileinfo">Ciudad: </span>Madrid
                  </b>
                </p>
              </div>
              <div className="col-xl-6 secundaryinfo">
                <p>
                  <b>
                    <span className="labelprofileinfo">Tel: </span>666554477
                  </b>
                </p>
                <p>
                  <b>
                    <span className="labelprofileinfo">Correo: </span>
                    maria.guti@gmail.com
                  </b>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row titleFavs">
          <div className="col-xl-1">
            <img src={ImgTitleFavs} alt="titlecat" className="ImgTitleFavs" />
          </div>
          <div className="col-xl-2">
            <h2>
              <b>Mis Favoritos</b>
            </h2>
          </div>
        </div>
        <div className="row adopter_cardlist">
          <Card />
        </div>
      </div>
    </>
  );
};
