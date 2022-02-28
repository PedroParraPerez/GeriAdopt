import React from "react";
import Mojito from "../../img/Mojito.jpg";
import "../../styles/detaildog.css";

export const DetailDog = () => {
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
                <strong>Mojito</strong>
              </h2>
            </div>
            <div>
              <ul>
                <li className="detaildog_info_list">
                  <span className="detaildog_info_list_label">F.nac: </span>
                  25/12/2016
                </li>
                <li className="detaildog_info_list">
                  <span className="detaildog_info_list_label">Raza: </span>
                  Beagle
                </li>
                <li className="detaildog_info_list">
                  <span className="detaildog_info_list_label">Genero: </span>
                  Masculino
                </li>
                <li className="detaildog_info_list">
                  <span className="detaildog_info_list_label">Tamaño: </span>
                  Mediano
                </li>
                <li className="detaildog_info_list">
                  <span className="detaildog_info_list_label">
                    Esterilizado:{" "}
                  </span>
                  Si
                </li>
                <li className="detaildog_info_list">
                  <span className="detaildog_info_list_label">CCAA: </span>
                  Madrid
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
