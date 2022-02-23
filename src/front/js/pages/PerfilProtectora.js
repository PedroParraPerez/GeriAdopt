import React from "react";

import "../../styles/PerfilProtectora.css";

import { Card } from "../component/card.js";
import SOSPeludos from "../../img/sospeludos.jpeg";
import EditIcon from "../../img/editIcon.png";
import ImgTitleFavs from "../../img/imagetitlefavs.png";

export const PerfilProtectora = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row Protectora_Protectoraprofile">
          <div className="col-xl-2 Protectora_imgprofile">
            <img src={SOSPeludos} alt="profilephoto" className="Protectora_Protectoraphoto" />
          </div>
          <div className="col-xl-4 Protectora_ProtectoraInfo">
            <div className="row Protectora_edit">
              <div className="col-xl-12">
                <div className="Protectora_editbutton">
                  <img src={EditIcon} className="Protectora_editicon" alt="editIcon" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 Protectora_primayinfo">
                <p>
                  <b>
                    <span className="Protectora_labelprofileinfo">Nombre: </span>SOS Peludos España
                  </b>
                </p>
                <p>
                  <b>
                    <span className="Protectora_labelprofileinfo">Ciudad: </span>Madrid
                  </b>
                </p>
              </div>
              <div className="col-xl-6 Protectora_secundaryinfo">
                <p>
                  <b>
                    <span className="Protectora_labelprofileinfo">Tel: </span>666554477
                  </b>
                </p>
                <p>
                  <b>
                    <span className="Protectora_labelprofileinfo">Correo: </span>
                    sospeludos.es@gmail.com
                  </b>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row Protectora_titleFavs">
          <div className="col-xl-1">
            <img src={ImgTitleFavs} alt="titlecat" className="Protectora_ImgTitleFavs" />
          </div>
          <div className="col-xl-2">
            <h2 className="titleProte">
              <b>SOS Peludos España</b>
            </h2>
          </div>
        </div>
        <div className="row Protectora_cardlist">
          <CardProtectora /> <CardProtectora /> <CardProtectora /> <CardProtectora />
        </div>
        <div className="row Protectora_cardProtectoralist">
          <CardProtectora /> <CardProtectora /> <CardProtectora /> <CardProtectora />
        </div>
        <div className="row Protectora_cardProtectoralist">
          <CardProtectora /> <CardProtectora /> <CardProtectora /> <CardProtectora />
        </div>
        
      </div>
    </>
  );
};