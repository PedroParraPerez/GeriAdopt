import React from "react";
import Mojito from "../../img/Mojito.jpg";
import "../../styles/Card.css";
import BirthdayIcon from "../../img/BirthdayIcon.png";
import GenderIcon from "../../img/GenderIcon.png";
import RazaIcon from "../../img/razaIcon.png";
import IconUbic from "../../img/IconUbicacion.png";
import editIcon from "../../img/editIcon.png";

export const CardProtectora = () => {
  return (
    <>
      <div className="card Card_carddogs">
        <img src={Mojito} className="Card_cardphoto" />
        <div className="Card_dogcardsbody">
          <h5 className="Card_card-title">
            <b>Mojito</b>
          </h5>
          <p className="card-text Card_textcarddog">
            Solo con su nombre se pueden hacer una idea de lo dulce que es...
          </p>
          <div className="Card_IconsAndDescription">
            <div className="row Card_IconsCard">
              <div className="col-xl-4">
                <img
                  src={BirthdayIcon}
                  alt="Birthday"
                  className="Card_CaractIcon"
                />
                <p className="Card_iconTexInv">
                  <b>Date</b>
                </p>
              </div>
              <div className="col-xl-4">
                <img src={RazaIcon} alt="breed" className="Card_CaractIcon" />
                <p className="Card_iconTexInv">
                  <b>Breed</b>
                </p>
              </div>
              <div className="col-xl-4">
                <img
                  src={GenderIcon}
                  alt="gender"
                  className="Card_CaractIcon"
                />
                <p className="Card_iconTexInv">
                  <b>Gender</b>
                </p>
              </div>
            </div>
          </div>
          <button className="btn Card_btn">Conóceme!</button>
          <div className="editButton">
            <img src={editIcon} alt="FavButton" id="editPencil" />
          </div>
          <p className="location">
            <img src={IconUbic} className="Card_IconUbic" /> Madrid
          </p>
        </div>
      </div>
    </>
  );
};
