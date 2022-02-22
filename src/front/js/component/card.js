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
      <div className="card carddogs">
        <img src={Mojito} id="cardphoto" />
        <div className="card-body dogcardsbody">
          <h5 className="card-title">
            <b>Mojito</b>
          </h5>
          <p className="card-text textcarddog">
            Solo con su nombre se pueden hacer una idea de lo dulce que es...
          </p>
          <div className="IconsAndDescription">
            <div className="row IconsCard">
              <div className="col-4">
                <img src={BirthdayIcon} alt="Birthday" className="CaractIcon" />
              </div>
              <div className="col-4">
                <img src={RazaIcon} alt="breed" className="CaractIcon" />
              </div>
              <div className="col-4">
                <img src={GenderIcon} alt="gender" className="CaractIcon" />
              </div>
            </div>
            <div className="row IconsDescription">
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
          <a href="#" className="btn">
            Conóceme!
          </a>
          <div className="FavButton">
            <img src={IconHearth} alt="FavButton" id="hearthbutton" />
          </div>
          <span className="location">
            <img src={IconUbic} className="IconUbic" /> Madrid
          </span>
        </div>
      </div>
    </>
  );
};
