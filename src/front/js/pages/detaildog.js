import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Mojito from "../../img/Mojito.jpg";
import "../../styles/detaildog.css";
import { Context } from "../store/appContext";

export const DetailDog = () => {
  const id = useParams().id;
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getDetailOfOneAnimal(id);
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row detaildog_view">
          <div className="col-xxl-6 d-flex justify-content-center align-items-center ">
            <img
              src={Mojito}
              className="detaildog_photos_principalphoto"
              alt="dog-photo"
            />
          </div>
          <div className="col-xxl-6">
            <div>
              <h2 className="detaildog_info_title">
                <strong>{store.detailAnimal.name}</strong>
              </h2>
            </div>
            <div>
              <ul>
                <li className="detaildog_info_list">
                  <span className="detaildog_info_list_label">Edad: </span>
                  {store.detailAnimal.age} años
                </li>
                <li className="detaildog_info_list">
                  <span className="detaildog_info_list_label">Raza: </span>
                  {store.detailAnimal.race}
                </li>
                <li className="detaildog_info_list">
                  <span className="detaildog_info_list_label">Genero: </span>
                  {store.detailAnimal.gender}
                </li>
                <li className="detaildog_info_list">
                  <span className="detaildog_info_list_label">Tamaño: </span>
                  {store.detailAnimal.size}
                </li>
                <li className="detaildog_info_list">
                  <span className="detaildog_info_list_label">
                    Esterilizado:{" "}
                  </span>
                  NO MAPEADO
                </li>
                <li className="detaildog_info_list">
                  <span className="detaildog_info_list_label">Ciudad: </span>
                  {store.detailAnimal.city}
                </li>
                <li className="detaildog_info_list">
                  <span className="detaildog_info_list_label">Protectora:</span>
                  NO MAPEADO
                </li>
                <li className="detaildog_info_list">
                  <span className="detaildog_info_list_label">Ubicación: </span>
                  NO MAPEADO
                </li>
                <li className="detaildog_info_list">
                  <span className="detaildog_info_list_label">
                    Correo de contacto:
                  </span>
                  NO MAPEADO (Correo de la prote)
                </li>
                <li className="detaildog_info_list">
                  <span className="detaildog_info_list_label">
                    Teléfono de contacto:
                  </span>
                  NO MAPEADO
                </li>
                <p className="detaildog_info_list">
                  <span className="detaildog_info_list_label">
                    Descripcion:{" "}
                  </span>
                  {store.detailAnimal.description}
                </p>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
