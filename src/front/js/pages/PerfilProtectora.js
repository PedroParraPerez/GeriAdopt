import React, { useContext, useState, useEffect } from "react";

import "../../styles/PerfilProtectora.css";

import { CardProtectora } from "../component/cardForProfileShelter.js";

import ImgTitleFavs from "../../img/imagetitlefavs.png";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import { InfoShelter } from "../component/infoShelter";

export const PerfilProtectora = () => {
  const { store, actions } = useContext(Context);
  let navigate = useNavigate();

  const [validate, setValidate] = useState();

  useEffect(() => {
    validateToken();
    actions.getAnimalsOfMyShelter();
  }, []);

  const validateToken = async () => {
    const response = await fetch(store.URLAPIDOGS + "shelter", {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    response.ok ? setValidate(response.ok) : navigate("/login");
  };
  return (
    <>
      <div className="container-fluid">
        <InfoShelter />
        <div className="row Protectora_titleFavs">
          <div className="col-xl-1">
            <img
              src={ImgTitleFavs}
              alt="titlecat"
              className="Protectora_ImgTitleFavs"
            />
          </div>
          <div className="col-xl-1">
            <h2 className="titleProte">
              <b>Animales</b>
            </h2>
          </div>
          <div className="col-xl-1">
            <Link to="/formregisteranimal">
              <button className="PerfilProtectora_addNewAnimal">+</button>
            </Link>
          </div>
        </div>
        <div className="row Protectora_cardlist">
          <CardProtectora />
        </div>
      </div>
    </>
  );
};
