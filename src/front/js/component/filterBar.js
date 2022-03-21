import React from "react";
import "../../styles/filterbar.css";

export const FilterBar = () => {
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
                <option
                  className="alldoglist_dropdown_filter"
                  value="Masculino"
                >
                  Perros
                </option>
                <option className="alldoglist_dropdown_filter" value="Femenino">
                  Gatos
                </option>
                <option className="alldoglist_dropdown_filter" value="Femenino">
                  Otros...
                </option>
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
                <option
                  className="alldoglist_dropdown_filter"
                  value="Masculino"
                >
                  Masculino
                </option>
                <option className="alldoglist_dropdown_filter" value="Femenino">
                  Femenino
                </option>
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
                <option className="alldoglist_dropdown_filter" value="Pequeño">
                  Pequeño
                </option>
                <option className="alldoglist_dropdown_filter" value="Mediano">
                  Mediano
                </option>
                <option className="alldoglist_dropdown_filter" value="Grande">
                  Grande
                </option>
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
                <option className="alldoglist_dropdown_filter" value="Cachorro">
                  Cachorro
                </option>
                <option className="alldoglist_dropdown_filter" value="Adulto">
                  Adulto
                </option>
                <option className="alldoglist_dropdown_filter" value="Mayor">
                  Mayor
                </option>
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
      </div>
    </>
  );
};
