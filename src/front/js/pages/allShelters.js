import React from "react";

import "../../styles/allShelters.css";
import SOSPeludos from "../../img/sospeludos.jpeg";
import ImgTitleFavs from "../../img/imagetitlefavs.png";
import { CardShelter } from "../component/card_with_info_shelters";
import { MiniTitle } from "../component/minititle";

export const AllShelterList = () => {
  return (
    <>
      <div className="container-fluid">
        <MiniTitle title="Protectoras" />
        <div className="row shelter_cardlist d-block">
          <CardShelter />
        </div>
      </div>
    </>
  );
};
