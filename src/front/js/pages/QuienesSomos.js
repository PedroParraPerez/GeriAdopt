import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";
import { Navbar } from "../component/navbar.js";
import { Footer } from "../component/footer.js";


export const QuienesSomos = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="container-fluid">
       <h1>HOLAAAAAAAAA</h1>
      </div>
    </>
  );
};
