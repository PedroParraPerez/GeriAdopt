import React, { Component } from "react";
import "../../styles/minititle.css";
import ImgTitleFavs from "../../img/imagetitlefavs.png";
import PropTypes from "prop-types";

export const MiniTitle = (props) => {
  return (
    <>
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
            <b>{props.title}</b>
          </h2>
        </div>
      </div>
    </>
  );
};
MiniTitle.propTypes = {
  title: PropTypes.string,
};
