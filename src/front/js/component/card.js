import React, { useContext, useEffect, useState } from "react";
import { AddToFavoritesPoster } from "../component/addToFavoritesPoster";
import Mojito from "../../img/Mojito.jpg";
import "../../styles/Card.css";
import BirthdayIcon from "../../img/BirthdayIcon.png";
import GenderIcon from "../../img/GenderIcon.png";
import RazaIcon from "../../img/razaIcon.png";
import IconUbic from "../../img/IconUbicacion.png";
import IconHearth from "../../img/IconHearth.png";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = () => {
  const { store, actions } = useContext(Context);
  const [mes, setMes] = useState(null);

  return (
    <>
      {mes == true ? (
        <AddToFavoritesPoster />
      ) : mes == false ? (
        "Eliminado de favoritos"
      ) : (
        ""
      )}
      {store.allAnimals.map((animal) => {
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
                      <b>
                        {animal.age} {animal.age <= 1 ? "año" : "años"}
                      </b>
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
              {localStorage.getItem("isAdopter") ? (
                <div
                  onClick={async () => {
                    let response = await actions.saveFavAnimal(animal.id);
                    setMes(response);

                    setTimeout(() => {
                      setMes(null);
                    }, 4000);
                  }}
                  className="Card_FavButton"
                >
                  <img
                    src={IconHearth}
                    alt="FavButton"
                    className="Card_hearth"
                  />
                </div>
              ) : (
                ""
              )}

              <p className="location">
                <img src={IconUbic} className="Card_IconUbic" />
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};
