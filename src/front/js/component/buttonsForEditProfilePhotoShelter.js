import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import ProfileImgGeneric from "../../img/profile_image_generic.jpg";

import "../../styles/buttonsforeditprofilephoto.css";
import {} from "react/cjs/react.production.min";

export const ButtonsForEditProfilePhotoShelter = () => {
  const { store, actions } = useContext(Context);

  const [image, setImage] = useState([]);

  const editProfilePhotoShelter = async () => {
    var data = new FormData();
    data.append("file", image[0]);
    const response = await fetch(store.URLAPIDOGS + `editprofilephotoshelter`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: data,
    });

    if (response.ok) {
      actions.getShelterInfo();
    } else {
      alert("el guardado no se ha hecho");
    }
  };

  return (
    <>
      <div className="button_edit_photo_profile d-block">
        <div className="row">
          <div className="col-xl-12 d-block">
            <label className="file-upload">
              <input
                type="file"
                multiple="multiple"
                onChange={(event) => {
                  setImage(event.target.files);
                }}
                name="fileToUpload"
              />
              Modificar imagen
            </label>
            <button
              type="button"
              onClick={() => {
                editProfilePhotoShelter();
              }}
              className="buttoneditphoto"
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
