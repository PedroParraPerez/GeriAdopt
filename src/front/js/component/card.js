import React from "react";
import Mojito from "../../img/Mojito.jpg";
import "../../styles/Card.css";
import BirthdayIcon from "../../img/BirthdayIcon.png";
import GenderIcon from "../../img/GenderIcon.png";
import RazaIcon from "../../img/razaIcon.png";
import IconUbic from "../../img/IconUbicacion.png";
import IconHearth from "../../img/IconHearth.png";

export const Card = () => {
  return (
    <>
      <div className="card Card_carddogs">
        <img src={Mojito} id="Card_cardphoto" />
        <div className="card-body Card_dogcardsbody">
          <h5 className="Card_card-title">
            <b>Mojito</b>
          </h5>
          <p className="card-text Card_textcarddog">
            Solo con su nombre se pueden hacer una idea de lo dulce que es...
          </p>
          <div className="Card_IconsAndDescription">
            <div className="row Card_IconsCard">
              <div className="col-md-4">
                <img src={BirthdayIcon} alt="Birthday" className="Card_CaractIcon" />
              </div>
              <div className="col-md-4">
                <img src={RazaIcon} alt="breed" className="Card_CaractIcon" />
              </div>
              <div className="col-md-4">
                <img src={GenderIcon} alt="gender" className="Card_CaractIcon" />
              </div>
            </div>
            <div className="row Card_Icons_text">
              <div className="col-md-4">
                <span className="Card_iconTexInv">
                  <b>Date</b>
                </span>
              </div>
              <div className="col-md-4">
                <p className="Card_iconTexInv">
                  <b>Breed</b>
                </p>
              </div>
              <div className="col-md-4">
                <p className="Card_iconTexInv">
                  <b>Gender</b>
                </p>
              </div>
            </div>
          </div>
          <a href="#" className="Card_btn">
            Conóceme!
          </a>
          <div className="Card_FavButton">
            <img src={IconHearth} alt="FavButton" id="Card_hearth" />
          </div>
          <p className="location">
            <img src={IconUbic} className="Card_IconUbic" /> Madrid
          </p>
        </div>
      </div>
    </>
  );
};
