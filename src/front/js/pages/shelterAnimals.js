import React from "react";

import "../../styles/shelterAnimals.css";

import { Card } from "../component/card.js";
import SOSPeludos from "../../img/sospeludos.jpeg";
import ImgTitleFavs from "../../img/imagetitlefavs.png";
import { CardPerfilShelter } from "../component/cardperfilshelter";

export const ShelterAnimals = () => {
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
              <b>SOS Peludos España</b>
            </h2>
          </div>
        </div>
        <div className="row shelter_cardlist">
          <Card />

          <Card />

          <Card />

          <Card />
        </div>
      </div>
    </>
  );
};
