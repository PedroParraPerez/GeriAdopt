import React, { useContext, useEffect } from "react";
import ProfileImgGeneric from "../../img/profile_image_generic.jpg";
import { Context } from "../store/appContext";

import { Link } from "react-router-dom";
import { EditInfoButton } from "./editInfoButton";
import { ButtonsForEditProfilePhoto } from "./buttonsForEditProfilePhoto";

export const InfoShelter = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getShelterInfo();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row Protectora_Protectoraprofile">
          <div className="col-xl-2 Protectora_imgprofile">
            <ButtonsForEditProfilePhoto />
            <img
              src={
                store.shelterInfo.image
                  ? store.shelterInfo.image
                  : ProfileImgGeneric
              }
              className="Protectora_Protectoraphoto"
            />
          </div>
          <div className="col-xl-4 Protectora_ProtectoraInfo">
            <EditInfoButton link="/formeditinfoshelter" />
            <div className="row">
              <div className="col-xl-6 Protectora_primayinfo">
                <p>
                  <b className="text-capitalize">
                    <span className="Protectora_labelprofileinfo">
                      Nombre:{" "}
                    </span>
                    {store.shelterInfo.name}
                  </b>
                </p>
                <p>
                  <b className="text-capitalize">
                    <span className="Protectora_labelprofileinfo">
                      Ciudad:{" "}
                    </span>
                    {store.shelterInfo.city}
                  </b>
                </p>
              </div>
              <div className="col-xl-6 Protectora_secundaryinfo">
                <p>
                  <b>
                    <span className="Protectora_labelprofileinfo">
                      Correo:{" "}
                    </span>
                    {store.shelterInfo.email}
                  </b>
                </p>
                <p>
                  <b className="text-capitalize">
                    <span className="Protectora_labelprofileinfo">
                      Teléfono:{" "}
                    </span>
                    {store.shelterInfo.tlf}
                  </b>
                </p>
                <p>
                  <b className="text-capitalize">
                    <span className="Protectora_labelprofileinfo">
                      Direción:{" "}
                    </span>
                    {store.shelterInfo.address}
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
