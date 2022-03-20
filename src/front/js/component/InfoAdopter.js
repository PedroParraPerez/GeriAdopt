import React, { useContext, useEffect } from "react";

import { Context } from "../store/appContext";

import GirlPhoto from "../../img/girlphoto.jpg";
import EditIcon from "../../img/editIcon.png";
import ImgTitleFavs from "../../img/imagetitlefavs.png";

export const InfoAdopter = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getAdopterInfo();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row Adopter_adopterprofile">
          <div className="col-xl-2 Adopter_imgprofile">
            <img
              src={store.adopterInfo.image}
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
                    {store.adopterInfo.name}
                  </b>
                </p>
                <p>
                  <b>
                    <span className="Adopter_labelprofileinfo">
                      Apellidos:{" "}
                    </span>
                    {store.adopterInfo.surname}
                  </b>
                </p>
                <p>
                  <b>
                    <span className="Adopter_labelprofileinfo">Ciudad: </span>
                    {store.adopterInfo.city}
                  </b>
                </p>
              </div>
              <div className="col-xl-6 Adopter_secundaryinfo">
                <p>
                  <b>
                    <span className="Adopter_labelprofileinfo">Correo: </span>
                    {store.adopterInfo.email}
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
      </div>
    </>
  );
};
