import React, { useContext, useState, useEffect } from "react";

import "../../styles/PerfilProtectora.css";

import { CardProtectora } from "../component/cardProtectora.js";
import SOSPeludos from "../../img/sospeludos.jpeg";
import EditIcon from "../../img/editIcon.png";
import ImgTitleFavs from "../../img/imagetitlefavs.png";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

export const PerfilProtectora = () => {
  const { store, actions } = useContext(Context);
  let navigate = useNavigate();

  const [validate, setValidate] = useState();

  useEffect(() => {
    validateToken();
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
        <div className="row Protectora_Protectoraprofile">
          <div className="col-xl-2 Protectora_imgprofile">
            <img
              src={SOSPeludos}
              alt="profilephoto"
              className="Protectora_Protectoraphoto"
            />
          </div>
          <div className="col-xl-4 Protectora_ProtectoraInfo">
            <div className="row Protectora_edit">
              <div className="col-xl-12">
                <div className="Protectora_editbutton">
                  <img
                    src={EditIcon}
                    className="Protectora_editicon"
                    alt="editIcon"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 Protectora_primayinfo">
                <p>
                  <b>
                    <span className="Protectora_labelprofileinfo">
                      Nombre:{" "}
                    </span>
                    SOS Peludos España
                  </b>
                </p>
                <p>
                  <b>
                    <span className="Protectora_labelprofileinfo">
                      Ciudad:{" "}
                    </span>
                    Madrid
                  </b>
                </p>
              </div>
              <div className="col-xl-6 Protectora_secundaryinfo">
                <p>
                  <b>
                    <span className="Protectora_labelprofileinfo">Tel: </span>
                    666554477
                  </b>
                </p>
                <p>
                  <b>
                    <span className="Protectora_labelprofileinfo">
                      Correo:{" "}
                    </span>
                    sospeludos.es@gmail.com
                  </b>
                </p>
              </div>
            </div>
          </div>
        </div>
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
