import React, { useState, useContext } from "react";

import "../../styles/formRegisterProte.css";
import { Context } from "../store/appContext";

export const FormRegisterAnimal = () => {
  const [formregisterAnimal, setFormregisterAnimal] = useState({});
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-5 formRegisterProte_view">
            <div className="row formRegisterProte_title">
              <div className="col-xl-12">
                <h2>REGISTRO DE ANIMALES</h2>
              </div>
            </div>
            <form>
              <div className="row formRegisterProte_GroupInput">
                <div className="row">
                  <label htmlFor="name">Nombre:</label>
                  <input
                    onChange={(event) => {
                      setFormregisterAnimal({
                        ...formregisterAnimal,
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
                      setFormregisterAnimal({
                        ...formregisterAnimal,
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
                      setFormregisterAnimal({
                        ...formregisterAnimal,
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
                      setFormregisterAnimal({
                        ...formregisterAnimal,
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
                      Masculino
                    </option>
                    <option
                      className="formRegisterAnimal_dropdown_value"
                      value="F"
                    >
                      Femenino
                    </option>
                  </select>
                </div>
                <div className="row">
                  <div className="col-xl-6">
                    <label htmlFor="size">
                      Tamaño (Pequeño, Mediano y Grande):
                    </label>
                    <select
                      onChange={(e) => {
                        setFormregisterAnimal({
                          ...formregisterAnimal,
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
                    {/* 
                    <input
                      onChange={(event) => {
                        setFormregisterAnimal({
                          ...formregisterAnimal,
                          [event.target.name]: event.target.value,
                        });
                      }}
                      type="text"
                      className="form-control formRegisterProte_Input"
                      name="size"
                    /> */}
                  </div>
                  <div className="col-xl-6">
                    <label htmlFor="age">Edad:</label>
                    <input
                      onChange={(event) => {
                        setFormregisterAnimal({
                          ...formregisterAnimal,
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
                        setFormregisterAnimal({
                          ...formregisterAnimal,
                          [event.target.name]: event.target.value,
                        });
                      }}
                      type="text"
                      className="form-control inputAgeAndCity"
                      name="short_description"
                    />
                  </div>
                  <div className="col-xl-6">
                    <label htmlFor="description">Descripcion:</label>
                    <input
                      onChange={(event) => {
                        setFormregisterAnimal({
                          ...formregisterAnimal,
                          [event.target.name]: event.target.value,
                        });
                      }}
                      type="textarea"
                      className="form-control inputAgeAndCity"
                      name="description"
                    />
                  </div>
                </div>
                <div className="col-XL-12 mt-2 d-flex justify-content-end mt-4">
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      if (
                        formregisterAnimal.password ==
                        formregisterAnimal.passwordrepeat
                      ) {
                        actions.registerAnimal(formregisterAnimal);
                      }
                    }}
                    className="btn formRegisterProte_button"
                    type="submit"
                  >
                    Crear Animal
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
