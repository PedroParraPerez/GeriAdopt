import React from "react";
import Mojito from "../../img/Mojito.jpg";
import "../../styles/cardProtectora.css";
import BirthdayIcon from "../../img/BirthdayIcon.png";
import GenderIcon from "../../img/GenderIcon.png";
import RazaIcon from "../../img/razaIcon.png";
import IconUbic from "../../img/IconUbicacion.png";
import IconHearth from "../../img/IconHearth.png";

export const CardProtectora = () => {
  return (
    <>
      <div className="card cardDogs">
        <img src={Mojito} className="cardPhoto" />
        <div className="card-body dogCardsBody">
          <h5 className="card-title">
            <b>Mojito</b>
          </h5>
          <p className="card-text textCardDog">
            Solo con su nombre se pueden hacer una idea de lo dulce que es...
          </p>
          <div className="iconsAndDescription">
            <div className="row iconsCard">
              <div className="col-4">
                <img src={BirthdayIcon} alt="Birthday" className="CaractIcon" />
              </div>
              <div className="col-4">
                <img src={RazaIcon} alt="breed" className="CaractIcon" />
              </div>
              <div className="col-4">
                <img src={GenderIcon} alt="gender" className="caractIcon" />
              </div>
            </div>
            <div className="row iconsDescription">
              <div className="col-4">
                <span>
                  <b>Date</b>
                </span>
              </div>
              <div className="col-4">
                <span>
                  <b>Breed</b>
                </span>
              </div>
              <div className="col-4">
                <span>
                  <b>Gender</b>
                </span>
              </div>
            </div>
          </div>
          <a href="#" className="button">
            Conóceme!
          </a>
          <div className="favButton">
            <img src={IconHearth} alt="button favorites" className="heartButton" />
          </div>
          <span className="gps">
            <img src={IconUbic} className="iconUbic" /> Madrid
          </span>
        </div>
      </div>
    </>
  );
};
