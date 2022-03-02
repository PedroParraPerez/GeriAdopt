import React, { useContext, useEffect, useState } from "react";

import Mojito from "../../img/Mojito.jpg";
import "../../styles/Card.css";
import BirthdayIcon from "../../img/BirthdayIcon.png";
import GenderIcon from "../../img/GenderIcon.png";
import RazaIcon from "../../img/razaIcon.png";
import IconUbic from "../../img/IconUbicacion.png";
import IconHearth from "../../img/IconHearth.png";

export const Card = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    getAllAnimal();
  }, []);

  const getAllAnimal = async () => {
    const response = await fetch(
      "https://3001-sromk-proyectofinalpl-qv3kwxco2lj.ws-eu34xl.gitpod.io/api/animal"
    );
    const data = await response.json();
    setAnimals(data.results);
  };

  return (
    <>
      {animals.map((animal) => {
        return (
          <div key={animal.id} className="card Card_carddogs">
            <img src={Mojito} className="Card_cardphoto" />
            <div className="Card_dogcardsbody">
              <h5 className="Card_card-title">
                <b>{animal.name}</b>
              </h5>
              <p className="card-text Card_textcarddog">
                {animal.short_description}
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
                      <b>{animal.age} años</b>
                    </p>
                  </div>
                  <div className="col-xl-4">
                    <img
                      src={RazaIcon}
                      alt="breed"
                      className="Card_CaractIcon"
                    />
                    <p className="Card_iconTexInv">
                      <b>{animal.race}</b>
                    </p>
                  </div>
                  <div className="col-xl-4">
                    <img
                      src={GenderIcon}
                      alt="gender"
                      className="Card_CaractIcon"
                    />
                    <p className="Card_iconTexInv">
                      <b>{animal.gender}</b>
                    </p>
                  </div>
                </div>
              </div>
              <button className="btn Card_btn">Conóceme!</button>
              <div className="Card_FavButton">
                <img src={IconHearth} alt="FavButton" className="Card_hearth" />
              </div>
              <p className="location">
                <img src={IconUbic} className="Card_IconUbic" /> {animal.city}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};
