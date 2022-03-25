import React, { useEffect, useContext } from "react";

import "../../styles/allShelters.css";
import SOSPeludos from "../../img/sospeludos.jpeg";
import ImgTitleFavs from "../../img/imagetitlefavs.png";
import { CardShelter } from "../component/card_with_info_shelters";
import { MiniTitle } from "../component/minititle";

import { Context } from "../store/appContext";

export const AllShelterList = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getAllShelters();
  }, []);
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
