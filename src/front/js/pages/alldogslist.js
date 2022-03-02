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
          <div className="row Alldogslist_filter">
            <div className="col-md-2">
              <select
                className="form-select Alldogslist_inputfilter"
                aria-label="Default select example"
              >
                <option selected disabled>
                  Especie
                </option>
                <option value="Masculino">Perros</option>
                <option value="Femenino">Gatos</option>
                <option value="Femenino">Otros...</option>
              </select>
            </div>
            <div className="col-md-2">
              <select
                className="form-select Alldogslist_inputfilter"
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
                className="form-select Alldogslist_inputfilter"
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
                className="form-select Alldogslist_inputfilter"
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
              <input
                className="form-control Alldogslist_inputfilter"
                type="text"
                name="Provincia"
                placeholder="Provincia"
              />
            </div>
            <div className="col-md-2 Alldogslist_filterbuttons">
              <button type="Submit" className="Alldogslist_filterbuttonsubmit">
                Buscar
              </button>
              <button type="Reset" className="Alldogslist_FilterButtonReset">
                X
              </button>
            </div>
          </div>
        </form>

        <div className=" row Alldoglist_cardlist">
          <Card />
        </div>
      </div>
    </>
  );
};
