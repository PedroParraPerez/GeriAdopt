import React from "react";

import "../../styles/allShelters.css";
import SOSPeludos from "../../img/sospeludos.jpeg";
import ImgTitleFavs from "../../img/imagetitlefavs.png";

export const AllShelterList = () => {
  return (
    <>
      <div className="container-fluid">
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
              <b>Protectoras</b>
            </h2>
          </div>
        </div>

        <div className="row shelter_shelterprofile">
          <div className="col-xl-2 shelter_imgprofile">
            <img src={SOSPeludos} alt="profilephoto" className="shelterLogo" />
          </div>
          <div className="col-xl-4 shelter_shelterInfo">
            <div className="row shelter_edit">
              <div className="col-xl-12"></div>
            </div>
            <div className="row">
              <div className="col-xl-6 shelter_primayinfo">
                <p>
                  <b>
                    <span className="shelter_labelprofileinfo">Nombre: </span>
                    SOS Peludos España
                  </b>
                </p>
                <p>
                  <b>
                    <span className="shelter_labelprofileinfo">Ciudad: </span>
                    Madrid
                  </b>
                </p>
              </div>
              <div className="col-xl-6 shelter_secundaryinfo">
                <p>
                  <b>
                    <span className="shelter_labelprofileinfo">Tel: </span>
                    666554477
                  </b>
                </p>
                <p>
                  <b>
                    <span className="shelter_labelprofileinfo">Correo: </span>
                    sospeludos.es@gmail.com
                  </b>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row shelter_shelterprofile">
          <div className="col-xl-2 shelter_imgprofile">
            <img src={SOSPeludos} alt="profilephoto" className="shelterLogo" />
          </div>
          <div className="col-xl-4 shelter_shelterInfo">
            <div className="row shelter_edit">
              <div className="col-xl-12"></div>
            </div>
            <div className="row">
              <div className="col-xl-6 shelter_primayinfo">
                <p>
                  <b>
                    <span className="shelter_labelprofileinfo">Nombre: </span>
                    SOS Peludos España
                  </b>
                </p>
                <p>
                  <b>
                    <span className="shelter_labelprofileinfo">Ciudad: </span>
                    Madrid
                  </b>
                </p>
              </div>
              <div className="col-xl-6 shelter_secundaryinfo">
                <p>
                  <b>
                    <span className="shelter_labelprofileinfo">Tel: </span>
                    666554477
                  </b>
                </p>
                <p>
                  <b>
                    <span className="shelter_labelprofileinfo">Correo: </span>
                    sospeludos.es@gmail.com
                  </b>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row shelter_cardlist"></div>
      </div>
    </>
  );
};
