import React, { useContext, useEffect, useState } from "react";
import "../../styles/adopter.css";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { FavList } from "../component/favList";
import { InfoAdopter } from "../component/InfoAdopter";

export const PerfilAdopter = () => {
  const { store, actions } = useContext(Context);
  let navigate = useNavigate();
  const [member, setMember] = useState([]);
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

  useEffect(() => {
    actions.getfavlist();
  }, [store.controlfav]);

  return (
    <>
      {validate ? (
        <div className="container-fluid">
          <InfoAdopter />
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
