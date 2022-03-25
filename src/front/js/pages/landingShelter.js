import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardAnimalsInShelterForViewAdopter } from "../component/card_animals_in_shelter_view_adopter";

import { InfoShelterForViewAdopter } from "../component/infoShelterForViewAdopter";
import { MiniTitle } from "../component/minititle";
import { Context } from "../store/appContext";

export const LandingShelter = () => {
  const { store, actions } = useContext(Context);
  const id = useParams().id;

  useEffect(() => {
    actions.getShelterInfoForViewAdopter(id);
    actions.getAnimalsInShelterForViewAdopter(id);
    console.log(store.animalsInShelterForViewAdopter);
  }, []);

  return (
    <>
      <InfoShelterForViewAdopter />
      <MiniTitle title="Nuestros Animales" />
      <div className="d-flex justify-content-center">
        <CardAnimalsInShelterForViewAdopter />
      </div>
    </>
  );
};
