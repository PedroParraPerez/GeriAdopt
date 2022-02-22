import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/adopter.css";

import { Navbar } from "../component/navbar.js";
import { Card } from "../component/card.js";
import GirlPhoto from "../../img/girlphoto.jpg";
import EditIcon from "../../img/editIcon.png";
import ImgTitleFavs from "../../img/imagetitlefavs.png";

export const Adopter = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row adopterprofile">
          <div className="col-md-5 imgprofile">
            <img src={GirlPhoto} alt="profilephoto" className="adopterphoto" />
          </div>
          <div className="col-md-7">
            <div className="adopterInfo">
              <div className="row edit">
                <div className="col-md-12">
                  <div className="editbutton">
                    <img src={EditIcon} className="editicon" alt="editIcon" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 primayinfo">
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
                <div className="col-md-6 secundaryinfo">
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
        </div>
        <div className="row titleFavs">
          <div className="col-md-1">
            <img src={ImgTitleFavs} alt="titlecat" className="ImgTitleFavs" />
          </div>
          <div className="col-md-11">
            <h2>
              <b>Mis Favoritos</b>
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 cardList">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};
