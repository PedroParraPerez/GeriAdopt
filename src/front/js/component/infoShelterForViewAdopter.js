import React, { useContext, useEffect } from "react";
import ProfileImgGeneric from "../../img/profile_image_generic.jpg";
import { Context } from "../store/appContext";

export const InfoShelterForViewAdopter = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="container-fluid">
        <div className="row Protectora_Protectoraprofile">
          <div className="col-xl-2 Protectora_imgprofile">
            <img
              src={
                store.shelterInfoForViewAdopter.image
                  ? store.shelterInfoForViewAdopter.image
                  : ProfileImgGeneric
              }
              className="Protectora_Protectoraphoto"
            />
          </div>
          <div className="col-xl-4 Protectora_ProtectoraInfo">
            <div className="row">
              <div className="col-xl-6 Protectora_primayinfo">
                <p>
                  <b className="text-capitalize">
                    <span className="Protectora_labelprofileinfo">
                      Nombre:{" "}
                    </span>
                    {store.shelterInfoForViewAdopter.name}
                  </b>
                </p>
                <p>
                  <b className="text-capitalize">
                    <span className="Protectora_labelprofileinfo">
                      Ciudad:{" "}
                    </span>
                    {store.shelterInfoForViewAdopter.city}
                  </b>
                </p>
              </div>
              <div className="col-xl-6 Protectora_secundaryinfo">
                <p>
                  <b>
                    <span className="Protectora_labelprofileinfo">
                      Correo:{" "}
                    </span>
                    {store.shelterInfoForViewAdopter.email}
                  </b>
                </p>
                <p>
                  <b className="text-capitalize">
                    <span className="Protectora_labelprofileinfo">
                      Teléfono:{" "}
                    </span>
                    {store.shelterInfoForViewAdopter.tlf}
                  </b>
                </p>
                <p>
                  <b className="text-capitalize">
                    <span className="Protectora_labelprofileinfo">
                      Dirección:{" "}
                    </span>
                    {store.shelterInfoForViewAdopter.address}
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
