import React, { useContext, useEffect } from "react";
import ProfileImgGeneric from "../../img/profile_image_generic.jpg";
import { Context } from "../store/appContext";
import SOSPeludos from "../../img/sospeludos.jpeg";
import EditIcon from "../../img/editIcon.png";
import ImgTitleFavs from "../../img/imagetitlefavs.png";
import { Link } from "react-router-dom";
import { CardProtectora } from "./cardProtectora";

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
                    {store.shelterInfo.name}
                  </b>
                </p>
                <p>
                  <b>
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
                  <b>
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
