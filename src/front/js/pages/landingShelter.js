import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import { InfoShelterForViewAdopter } from "../component/infoShelterForViewAdopter";
import { MiniTitle } from "../component/minititle";
import { Context } from "../store/appContext";

export const LandingShelter = () => {
  const { store, actions } = useContext(Context);
  const id = useParams().id;

  useEffect(() => {
    actions.getShelterInfoForViewAdopter(id);
  }, []);

  return (
    <>
      <InfoShelterForViewAdopter />
      <MiniTitle title="Nuestros Animales" />
    </>
  );
};
