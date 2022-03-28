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
              src={
                !store.detailAnimal.image ? Mojito : store.detailAnimal.image
              }
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
                  {store.detailAnimal.age}{" "}
                  {store.detailAnimal.age <= 1 ? "año" : "años"}
                </li>
                <li className="detaildog_info_list">
                  <span className="detaildog_info_list_label">Raza: </span>
                  {store.detailAnimal.race}
                </li>
                <li className="detaildog_info_list">
                  <span className="detaildog_info_list_label">Genero: </span>
                  {store.detailAnimal.gender == "H" ? "Hembra" : "Macho"}
                </li>
                <li className="detaildog_info_list">
                  <span className="detaildog_info_list_label">Tamaño: </span>
                  {store.detailAnimal.size}
                </li>
                <li className="detaildog_info_list">
                  <p className="detaildog_info_list">
                    <span className="detaildog_info_list_label">
                      Descripcion:{" "}
                    </span>
                    {store.detailAnimal.description}
                  </p>
                </li>
                <br />
                <li className="detaildog_info_list">
                  <span className="detaildog_info_list_label">
                    Protectora:{" "}
                  </span>
                  {store.detailAnimal.shelter
                    ? store.detailAnimal.shelter.name
                    : ""}
                </li>
                <li className="detaildog_info_list">
                  <span className="detaildog_info_list_label">Dirección: </span>
                  {store.detailAnimal.shelter
                    ? store.detailAnimal.shelter.address
                    : ""}
                </li>
                <li className="detaildog_info_list">
                  <span className="detaildog_info_list_label">Ciudad: </span>
                  {store.detailAnimal.shelter
                    ? store.detailAnimal.shelter.city
                    : ""}
                </li>
                <li className="detaildog_info_list">
                  <span className="detaildog_info_list_label">
                    Correo de contacto:{" "}
                  </span>
                  {store.detailAnimal.shelter
                    ? store.detailAnimal.shelter.email
                    : ""}
                </li>
                <li className="detaildog_info_list">
                  <span className="detaildog_info_list_label">
                    Teléfono de contacto:{" "}
                  </span>
                  {store.detailAnimal.shelter
                    ? store.detailAnimal.shelter.tlf
                    : ""}
                </li>
                <li className="detaildog_info_list">
                  <button>
                    <a
                      href={`mailto:${
                        store.detailAnimal.shelter
                          ? store.detailAnimal.shelter.email
                          : ""
                      }?subject=Muy buenas ${
                        store.detailAnimal.shelter
                          ? store.detailAnimal.shelter.name
                          : ""
                      }!`}
                    >
                      {" "}
                      Contacto via email
                    </a>
                  </button>
                </li>
                <li className="detaildog_info_list">
                  <button>
                    <a
                      type="button"
                      target="_blank"
                      href={`https://wa.me/+34${
                        store.detailAnimal.shelter
                          ? store.detailAnimal.shelter.tlf
                          : ""
                      }`}
                    >
                      {" "}
                      Contacto via Whatsapp
                    </a>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
