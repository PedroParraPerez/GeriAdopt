import React, { useContext, useEffect, useState } from "react";
import "../../styles/PerfilAdopter.css";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { FavList } from "../component/favList";
import { InfoAdopter } from "../component/InfoAdopter";
import { MiniTitle } from "../component/minititle";

export const PerfilAdopter = () => {
  const { store, actions } = useContext(Context);
  let navigate = useNavigate();

  const [validate, setValidate] = useState();

  useEffect(() => {
    validateNoToken();
  }, []);

  const validateNoToken = async () => {
    const response = await fetch(store.URLAPIDOGS + "nouser", {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    response.ok ? setValidate(response.ok) : navigate("/login");
  };

  return (
    <>
      {validate ? (
        <div className="container-fluid">
          <InfoAdopter />
          <MiniTitle title="Mis favoritos" />
          <div className="row Adopter_cardlist">
            <FavList />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
