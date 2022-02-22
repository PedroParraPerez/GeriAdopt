import React, { useContext } from "react";
import { Context } from "../store/appContext";
import perrogafasblog from "../../img/perrogafasblog.jpg";
import "../../styles/blogsection.css";

import { Navbar } from "../component/navbar.js";

export const BlogSection = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <Navbar />
      <div>
        <h1 className="tituloblog1"> Nuestro blog</h1>
        <img
          className="perrogafasblog"
          src={perrogafasblog}
          alt="perrogafasblog"
        ></img>
      </div>
    </>
  );
};
