import React from "react";
import { Link } from "react-router-dom";
import "../../../front/styles/editInfoButton.css";
import PropTypes from "prop-types";

import EditIcon from "../../img/editIcon.png";

export const EditInfoButton = (props) => {
  return (
    <>
      <div className="row Protectora_edit">
        <div className="col-xl-12">
          <div className="Protectora_editbutton">
            <Link to={props.link}>
              <img
                src={EditIcon}
                className="Protectora_editicon"
                alt="editIcon"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
// /formeditinfoshelter

EditInfoButton.propTypes = {
  link: PropTypes.string,
};
