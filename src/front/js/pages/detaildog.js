import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Mojito from "../../img/Mojito.jpg";
import "../../styles/detaildog.css";
import { Context } from "../store/appContext";

export const DetailDog = () => {

  const id = useParams().id;
  const {store, actions} = useContext(Context)
  const [detailanimal, setDetailanimal] = useState({})


  useEffect(() => {
    getDetailOfOneAnimal();
  }, []);

  const getDetailOfOneAnimal = async () => {
    const response = await fetch(
      store.URLAPIDOGS + "detailanimal/" + id
    );
    const data = await response.json();
    setDetailanimal(data.results);
  };

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
                <strong>{detailanimal.name}</strong>
              </h2>
            </div>
            <div>
              <ul>
                <li className="detaildog_info_list">
                  <span className="detaildog_info_list_label">Edad: </span>
                  {detailanimal.age} años
                </li>
                <li className="detaildog_info_list">
                  <span className="detaildog_info_list_label">Raza: </span>
                  {detailanimal.race}
                </li>
                <li className="detaildog_info_list">
                  <span className="detaildog_info_list_label">Genero: </span>
                  {detailanimal.gender}
                </li>
                <li className="detaildog_info_list">
                  <span className="detaildog_info_list_label">Tamaño: </span>
                  {detailanimal.size}
                </li>
                <li className="detaildog_info_list">
                  <span className="detaildog_info_list_label">
                    Esterilizado:{" "}
                  </span>
                  Si
                </li>
                <li className="detaildog_info_list">
                  <span className="detaildog_info_list_label">Ciudad: </span>
                  {detailanimal.city}
                </li>
                <li className="detaildog_info_list">
                  <span className="detaildog_info_list_label">Protectora:</span>
                  Apadrina un perro
                </li>
                <li className="detaildog_info_list">
                  <span className="detaildog_info_list_label">Ubicación: </span>
                  Calle Edison, nº 3; (Madrid)
                </li>
                <li className="detaildog_info_list">
                  <span className="detaildog_info_list_label">
                    Correo de contacto:
                  </span>
                  apadrina@unperro.com
                </li>
                <li className="detaildog_info_list">
                  <span className="detaildog_info_list_label">
                    Teléfono de contacto:
                  </span>
                  654-76-87-98
                </li>
                <p className="detaildog_info_list">
                  <span className="detaildog_info_list_label">
                    Descripcion:{" "}
                  </span>
                  Solo con el nombre se pueden hacer una idea de lo dulce que
                  es. Es un animal que le encantan las caricias y el contacto
                  humano. Su relación con otro tipo de animales tambien es
                  excelente, siempre buscando divertirse jugando.
                </p>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
