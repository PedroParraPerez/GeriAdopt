import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/formRegisterUser.css";
import { Context } from "../store/appContext.js";
import { useParams } from "react-router-dom";

export const FormEditAnimal = () => {
  const [info, setInfo] = useState({});
  const { store, actions } = useContext(Context);
  const id = useParams().id;

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-5 formRegisterProte_view">
            <div className="row formRegisterProte_title">
              <div className="col-xl-12">
                <h2>EDITAR ANIMAL</h2>
              </div>
            </div>
            <form>
              <div className="row formRegisterProte_GroupInput">
                <div className="row">
                  <label htmlFor="name">Nombre:</label>
                  <input
                    onChange={(event) => {
                      setInfo({
                        ...info,
                        [event.target.name]: event.target.value,
                      });
                    }}
                    type="text"
                    className="form-control formRegisterProte_Input"
                    name="name"
                    required
                  />
                </div>
                <div className="row">
                  <label htmlFor="species">Especie:</label>
                  <select
                    onChange={(e) => {
                      setInfo({
                        ...info,
                        species: e.target.value,
                      });
                    }}
                    className="form-select formRegisterAnimal_Input"
                    aria-label="Default select example"
                    name="species"
                  >
                    <option selected disabled>
                      Especie
                    </option>
                    <option
                      className="alldoglist_dropdown_filter"
                      value="Perro"
                    >
                      Perro
                    </option>
                    <option
                      className="formRegisterAnimal_dropdown_filter"
                      value="Gato"
                    >
                      Gatos
                    </option>
                    <option
                      className="formRegisterAnimal_dropdown_filter"
                      value="Otro"
                    >
                      Otros...
                    </option>
                  </select>
                </div>
                <div className="row">
                  <label htmlFor="race">Raza:</label>
                  <input
                    onChange={(event) => {
                      setInfo({
                        ...info,
                        [event.target.name]: event.target.value,
                      });
                    }}
                    type="text"
                    className="form-control formRegisterProte_Input"
                    name="race"
                    required
                  />
                </div>
                <div className="row">
                  <label htmlFor="gender">Genero (M o F):</label>
                  <select
                    onChange={(e) => {
                      setInfo({
                        ...info,
                        gender: e.target.value,
                      });
                    }}
                    className="form-select formRegisterAnimal_Input"
                    aria-label="Default select example"
                    name="gender"
                    requiered
                  >
                    <option selected disabled>
                      Genero
                    </option>
                    <option
                      className="formRegisterAnimal_dropdown_value"
                      value="M"
                    >
                      Macho
                    </option>
                    <option
                      className="formRegisterAnimal_dropdown_value"
                      value="H"
                    >
                      Hembra
                    </option>
                  </select>
                </div>
                <div className="row">
                  <div className="col-xl-6">
                    <label htmlFor="size">Tamaño:</label>
                    <select
                      onChange={(e) => {
                        setInfo({
                          ...info,
                          size: e.target.value,
                        });
                      }}
                      className="form-select formRegisterAnimal_input_value"
                      aria-label="Default select example"
                      name="size"
                    >
                      <option selected disabled>
                        Tamaño
                      </option>
                      <option
                        className="formRegisterAnimal_dropdown_value"
                        value="Pequeno"
                      >
                        Pequeño
                      </option>
                      <option
                        className="formRegisterAnimal_dropdown_value"
                        value="Mediano"
                      >
                        Mediano
                      </option>
                      <option
                        className="formRegisterAnimal_dropdown_value"
                        value="Grande"
                      >
                        Grande
                      </option>
                    </select>
                  </div>
                  <div className="col-xl-6">
                    <label htmlFor="age">Edad:</label>
                    <input
                      onChange={(event) => {
                        setInfo({
                          ...info,
                          [event.target.name]: event.target.value,
                        });
                      }}
                      type="number"
                      className="form-control inputAgeAndCity"
                      name="age"
                    />
                  </div>
                  <div className="col-xl-6">
                    <label htmlFor="short_description">
                      Descripcion corta:
                    </label>
                    <input
                      onChange={(event) => {
                        setInfo({
                          ...info,
                          [event.target.name]: event.target.value,
                        });
                      }}
                      type="text"
                      className="form-control inputAgeAndCity"
                      name="short_description"
                    />
                  </div>
                  <div className="col-xl-6">
                    <label htmlFor="description">Descripcion larga:</label>
                    <input
                      onChange={(event) => {
                        setInfo({
                          ...info,
                          [event.target.name]: event.target.value,
                        });
                      }}
                      type="textarea"
                      className="form-control inputAgeAndCity"
                      name="description"
                    />
                  </div>
                </div>
                <div className="col-xl-6 mt-2  mt-4"></div>
                <div className="col-xl-6 mt-2 d-flex justify-content-end mt-4">
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      actions.editInfoAnimal(info, id);
                    }}
                    className="btn formRegisterProte_button"
                    type="submit"
                  >
                    Guardar Cambios
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
