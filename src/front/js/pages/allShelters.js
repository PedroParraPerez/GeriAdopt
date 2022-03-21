import React from "react";

import "../../styles/allShelters.css";
import SOSPeludos from "../../img/sospeludos.jpeg";
import ImgTitleFavs from "../../img/imagetitlefavs.png";
import { CardShelter } from "../component/card_with_info_shelters";

export const AllShelterList = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row allshelters__shelter_titleFavs">
          <div className="col-xl-1">
            <img
              src={ImgTitleFavs}
              alt="titlecat"
              className="allshelters__ImgTitleFavs"
            />
          </div>
          <div className="col-xl-2">
            <h2 className="allshelters_titleShelter">
              <b>Protectoras</b>
            </h2>
          </div>
        </div>
        <div className="row shelter_cardlist d-block">
          <CardShelter />
        </div>
      </div>
    </>
  );
};
