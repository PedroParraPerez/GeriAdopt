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
                  <input
                    onChange={(event) => {
                      setFormregisterAnimal({
                        ...formregisterAnimal,
                        [event.target.name]: event.target.value,
                      });
                    }}
                    type="text"
                    className="form-control formRegisterProte_Input"
                    name="species"
                    required
                  />
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
                  <input
                    onChange={(event) => {
                      setFormregisterAnimal({
                        ...formregisterAnimal,
                        [event.target.name]: event.target.value,
                      });
                    }}
                    type="text"
                    className="form-control formRegisterProte_Input"
                    name="gender"
                    required
                  />
                </div>
                <div className="row">
                  <div className="col-xl-6">
                    <label htmlFor="size">
                      Tamaño (Pequeño, Mediano y Grande):
                    </label>
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
                    />
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
                    Registrarme
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
