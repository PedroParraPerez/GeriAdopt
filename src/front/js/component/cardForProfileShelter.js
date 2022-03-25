import React, { useContext, useEffect, useState } from "react";
import Mojito from "../../img/Mojito.jpg";
import "../../styles/Card.css";
import BirthdayIcon from "../../img/BirthdayIcon.png";
import GenderIcon from "../../img/GenderIcon.png";
import RazaIcon from "../../img/razaIcon.png";
import IconUbic from "../../img/IconUbicacion.png";
import editIcon from "../../img/editIcon.png";
import { Context } from "../store/appContext";
import "../../styles/buttonEditAnimal.css";

import { Link } from "react-router-dom";
import { ButtonEditAnimal } from "./buttonEditAnimal";

export const CardProtectora = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      {store.animalsInMyShelter.map((animal) => {
        return (
          <div key={animal.id} className="card Card_carddogs">
            <img
              src={!animal.image ? Mojito : animal.image}
              className="Card_cardphoto"
            />
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
              <Link to={"/detailanimal/" + animal.id}>
                <button className="btn Card_btn">Conóceme!</button>
              </Link>
              <div className="editButton">
                <div className="dropdown">
                  <button className="dropbtn">
                    {" "}
                    <img src={editIcon} alt="FavButton" id="editPencil" />
                  </button>
                  <div className="dropdown-content">
                    <ul>
                      <Link to={"/formeditanimal/" + animal.id}>
                        <li>Editar animal</li>
                      </Link>
                      <Link to={"/formeditanimal/" + animal.id}>
                        <li>Borrar Animal</li>
                      </Link>
                    </ul>
                  </div>
                </div>
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
