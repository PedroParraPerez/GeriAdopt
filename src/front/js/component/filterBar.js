import React, { useState, useContext } from "react";

import "../../styles/filterbar.css";
import { Context } from "../store/appContext";

export const FilterBar = () => {
  const [filter, setFilter] = useState({});
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="container-fluid">
        <div className="row Alldogslist_filter">
          <div className="col-md-2">
            <select
              onChange={(e) => {
                setFilter({ ...filter, species: e.target.value });
              }}
              className="form-select Alldogslist_inputfilter"
              aria-label="Default select example"
            >
              <option selected disabled>
                Especie
              </option>
              <option className="alldoglist_dropdown_filter" value="Perro">
                Perro
              </option>
              <option className="alldoglist_dropdown_filter" value="Gato">
                Gatos
              </option>
              <option className="alldoglist_dropdown_filter" value="Otro">
                Otros...
              </option>
            </select>
          </div>
          <div className="col-md-2">
            <select
              onChange={(e) => {
                setFilter({ ...filter, gender: e.target.value });
              }}
              className="form-select Alldogslist_inputfilter"
              aria-label="Default select example"
            >
              <option selected disabled>
                Genero
              </option>
              <option className="alldoglist_dropdown_filter" value="M">
                Macho
              </option>
              <option className="alldoglist_dropdown_filter" value="H">
                Hembra
              </option>
            </select>
          </div>
          <div className="col-md-2">
            <select
              onChange={(e) => {
                setFilter({ ...filter, size: e.target.value });
              }}
              className="form-select Alldogslist_inputfilter"
              aria-label="Default select example"
            >
              <option selected disabled>
                Tamaño
              </option>
              <option className="alldoglist_dropdown_filter" value="Pequeno">
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
              onChange={(e) => {
                setFilter({ ...filter, age: e.target.value });
              }}
              className="form-select Alldogslist_inputfilter"
              aria-label="Default select example"
            >
              <option selected disabled>
                Edad
              </option>
              <option className="alldoglist_dropdown_filter" value="cachorro">
                Cachorro
              </option>
              <option className="alldoglist_dropdown_filter" value="adulto">
                Adulto
              </option>
              <option className="alldoglist_dropdown_filter" value="mayor">
                Mayor
              </option>
            </select>
          </div>
          <div className="col-md-2">
            <input
              onChange={(e) => {
                setFilter({ ...filter, city: e.target.value });
              }}
              className="form-control Alldogslist_inputfilter"
              type="text"
              name="city"
              placeholder="Provincia"
            />
          </div>
          <div className="col-md-2 Alldogslist_filterbuttons">
            <button
              onClick={() => {
                actions.filteranimals(filter);
              }}
              className="Alldogslist_filterbuttonsubmit"
            >
              Buscar
            </button>
            <button
              onClick={() => {
                actions.getAllAnimal();
              }}
              className="Alldogslist_FilterButtonReset"
            >
              X
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
