import React from "react";
import "../../styles/buttonsforeditprofilephoto.css";
export const ButtonsForEditProfilePhoto = () => {
  return (
    <>
      <div className="button_edit_photo_profile d-block">
        <div className="row">
          <div className="col-xl-12 d-block">
            <label class="file-upload">
              <input type="file" multiple="multiple" name="fileToUpload" />
              Modificar
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
