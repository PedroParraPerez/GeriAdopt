import React, { useContext } from "react";
import { Context } from "../store/appContext";
import ProfileImgGeneric from "../../img/profile_image_generic.jpg";

import "../../styles/buttonsforeditprofilephoto.css";
export const ButtonsForEditProfilePhoto = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="button_edit_photo_profile d-block">
        <div className="row">
          <div className="col-xl-12 d-block">
            <label class="file-upload">
              <input type="file" multiple="multiple" name="fileToUpload" />
              {store.shelterInfo.image ? "Modificar" : "Añadir imagen"}
            </label>

            <button type="button" className="buttoneditphoto">
              Guardar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
{
  /* <label class="file-upload">
<input type="file" multiple="multiple" name="fileToUpload" />
{store.shelterInfo.image ? "Modificar" : <img
src={ProfileImgGeneric} />}
</label> */
}
