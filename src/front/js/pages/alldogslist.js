import React from "react";
import "../../styles/alldogslist.css";

import { Card } from "../component/card.js";

export const AllDogsList = () => {
  const HundleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="container-fluid">
        <form>
          <div className="row filter">
            <div className="col-md-2">
              <input placeholder="Especie" className="inputfilter" />
            </div>
            <div className="col-md-2">
              <select
                class="form-select inputfilter"
                aria-label="Default select example"
              >
                <option selected disabled>
                  Genero
                </option>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
              </select>
            </div>
            <div className="col-md-2">
              <select
                class="form-select inputfilter"
                aria-label="Default select example"
              >
                <option selected disabled>
                  Tamaño
                </option>
                <option value="Pequeño">Pequeño</option>
                <option value="Mediano">Mediano</option>
                <option value="Grande">Grande</option>
              </select>
            </div>
            <div className="col-md-2">
              <select
                class="form-select inputfilter"
                aria-label="Default select example"
              >
                <option selected disabled>
                  Edad
                </option>
                <option value="Cachorro">Cachorro</option>
                <option value="Adulto">Adulto</option>
                <option value="Mayor">Mayor</option>
              </select>
            </div>
            <div className="col-md-2">
              <input placeholder="Provincia" className="inputfilter" />
            </div>
            <div className="col-md-2">
              <button type="Submit" className="filterbuttonsubmit">
                Buscar
              </button>
              <button type="Reset" className="FilterButtonReset">
                X
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="cardList">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};
