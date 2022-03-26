import React, { useContext, useEffect } from "react";
import ProfileImgGeneric from "../../img/profile_image_generic.jpg";

import { Context } from "../store/appContext";

import EditIcon from "../../img/editIcon.png";
import { Link } from "react-router-dom";
import { EditInfoButton } from "./editInfoButton";
import { ButtonsForEditProfilePhoto } from "./buttonsForEditProfilePhoto";

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
            <ButtonsForEditProfilePhoto route="editprofilephotoadopter" />

            <img
              src={
                store.adopterInfo.image
                  ? store.adopterInfo.image
                  : ProfileImgGeneric
              }
              alt="profilephoto"
              className="Adopter_adopterphoto"
            />
          </div>
          <div className="col-xl-4 Adopter_adopterInfo">
            <EditInfoButton link="/formeditinfoAdopter" />
            <div className="row">
              <div className="col-xl-6 Adopter_primayinfo">
                <p>
                  <b className="text-capitalize">
                    <span className="Adopter_labelprofileinfo">Nombre: </span>
                    {store.adopterInfo.name}
                  </b>
                </p>
                <p>
                  <b className="text-capitalize">
                    <span className="Adopter_labelprofileinfo">
                      Apellidos:{" "}
                    </span>
                    {store.adopterInfo.surname}
                  </b>
                </p>
                <p>
                  <b className="text-capitalize">
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
      </div>
    </>
  );
};
