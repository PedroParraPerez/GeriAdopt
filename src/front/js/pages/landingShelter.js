import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardAnimalsInShelterForViewAdopter } from "../component/card_animals_in_shelter_view_adopter";
import "../../styles/landingShelter.css";
import { InfoShelterForViewAdopter } from "../component/infoShelterForViewAdopter";
import { MiniTitle } from "../component/minititle";
import { Context } from "../store/appContext";

export const LandingShelter = () => {
  const { store, actions } = useContext(Context);
  const id = useParams().id;

  useEffect(() => {
    actions.getShelterInfoForViewAdopter(id);
    actions.getAnimalsInShelterForViewAdopter(id);
  }, []);

  return (
    <>
      <InfoShelterForViewAdopter />
      <MiniTitle title="Animales" />
      <div className=" row list_animals_in_shelter_for_view_adopter">
        <CardAnimalsInShelterForViewAdopter />
      </div>
    </>
  );
};
