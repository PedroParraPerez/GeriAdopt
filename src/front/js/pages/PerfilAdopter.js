import React, { useContext, useEffect, useState } from "react";
import "../../styles/adopter.css";
import { Context } from "../store/appContext";
import { Card } from "../component/card.js";
import GirlPhoto from "../../img/girlphoto.jpg";
import EditIcon from "../../img/editIcon.png";
import ImgTitleFavs from "../../img/imagetitlefavs.png";
import { useNavigate } from "react-router-dom";
import { FavList } from "../component/favList";

export const PerfilAdopter = () => {
  const { store, actions } = useContext(Context);
  let navigate = useNavigate();
  const [member, setMember] = useState([]);
  const [validate, setValidate] = useState();

  useEffect(() => {
    validateToken();
  }, []);

  const validateToken = async () => {
    const response = await fetch(store.URLAPIDOGS + "user", {
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
          <div className="row Adopter_adopterprofile">
            <div className="col-xl-2 Adopter_imgprofile">
              <img
                src={GirlPhoto}
                alt="profilephoto"
                className="Adopter_adopterphoto"
              />
            </div>
            <div className="col-xl-4 Adopter_adopterInfo">
              <div className="row Adopter_edit">
                <div className="col-xl-12">
                  <div className="Adopter_editbutton">
                    <img
                      src={EditIcon}
                      onClick={() => {
                        actions.getfavlist();
                      }}
                      className="Adopter_editicon"
                      alt="editIcon"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-6 Adopter_primayinfo">
                  <p>
                    <b>
                      <span className="Adopter_labelprofileinfo">Nombre: </span>
                      María
                    </b>
                  </p>
                  <p>
                    <b>
                      <span className="Adopter_labelprofileinfo">
                        Apellidos:{" "}
                      </span>
                      Gutierrez Mola
                    </b>
                  </p>
                  <p>
                    <b>
                      <span className="Adopter_labelprofileinfo">Ciudad: </span>
                      Madrid
                    </b>
                  </p>
                </div>
                <div className="col-xl-6 Adopter_secundaryinfo">
                  <p>
                    <b>
                      <span className="Adopter_labelprofileinfo">Tel: </span>
                      666554477
                    </b>
                  </p>
                  <p>
                    <b>
                      <span className="Adopter_labelprofileinfo">Correo: </span>
                      maria.guti@gmail.com
                    </b>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row Adopter_titleFavs">
            <div className="col-xl-1">
              <img
                src={ImgTitleFavs}
                alt="titlecat"
                className="Adopter_ImgTitleFavs"
              />
            </div>
            <div className="col-xl-2">
              <h2>
                <b>Mis Favoritos</b>
              </h2>
            </div>
          </div>
          <div className="row Adopter_cardlist">
            <FavList />
          </div>
        </div>
      ) : (
        navigate("/login")
      )}
    </>
  );
};
