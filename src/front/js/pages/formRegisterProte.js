import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "../../styles/formRegisterProte.css";
import { Context } from "../store/appContext";

export const FormRegisterProte = () => {
  const [formregisterShelter, setFormregisterShelter] = useState({});
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("isShelter")) {
      navigateProfile();
    }
  }, []);
  const navigateProfile = () => {
    navigate("/profile");
  };

  return (
    <>
      {!localStorage.getItem("token") ? (
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-5 formRegisterProte_view">
              <div className="row formRegisterProte_title">
                <div className="col-xl-12">
                  <h2>REGISTRO PROTECTORAS</h2>
                </div>
              </div>
              <form>
                <div className="row formRegisterProte_GroupInput">
                  <div className="row">
                    <label htmlFor="name">Nombre de la protectora:</label>
                    <input
                      onChange={(event) => {
                        setFormregisterShelter({
                          ...formregisterShelter,
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
                    <label htmlFor="email">Correo</label>
                    <input
                      onChange={(event) => {
                        setFormregisterShelter({
                          ...formregisterShelter,
                          [event.target.name]: event.target.value,
                        });
                      }}
                      type="email"
                      className="form-control formRegisterProte_Input"
                      name="email"
                      required
                    />
                  </div>
                  <div className="row">
                    <label htmlFor="password">Contraseña:</label>
                    <input
                      onChange={(event) => {
                        setFormregisterShelter({
                          ...formregisterShelter,
                          [event.target.name]: event.target.value,
                        });
                      }}
                      type="password"
                      className="form-control formRegisterProte_Input"
                      name="password"
                      required
                    />
                  </div>
                  <div className="row">
                    <label htmlFor="passwordrepeat">Confirmar Contraseña</label>
                    <input
                      onChange={(event) => {
                        setFormregisterShelter({
                          ...formregisterShelter,
                          [event.target.name]: event.target.value,
                        });
                      }}
                      type="password"
                      className="form-control formRegisterProte_Input"
                      name="passwordrepeat"
                      required
                    />
                  </div>
                  <div className="row">
                    <div className="col-xl-6">
                      <label htmlFor="direction">Dirección:</label>
                      <input
                        onChange={(event) => {
                          setFormregisterShelter({
                            ...formregisterShelter,
                            [event.target.name]: event.target.value,
                          });
                        }}
                        type="text"
                        className="form-control formRegisterProte_Input"
                        name="address"
                      />
                      <label htmlFor="tlf">Teléfono:</label>
                      <input
                        onChange={(event) => {
                          setFormregisterShelter({
                            ...formregisterShelter,
                            [event.target.name]: event.target.value,
                          });
                        }}
                        type="text"
                        className="form-control formRegisterProte_Input"
                        name="tlf"
                      />
                    </div>
                    <div className="col-xl-6">
                      <label htmlFor="city">Ciudad:</label>
                      <input
                        onChange={(event) => {
                          setFormregisterShelter({
                            ...formregisterShelter,
                            [event.target.name]: event.target.value,
                          });
                        }}
                        type="text"
                        className="form-control inputAgeAndCity"
                        name="city"
                      />
                    </div>
                  </div>
                  <div className="col-XL-12 mt-2 d-flex justify-content-end mt-4">
                    <button
                      onClick={(event) => {
                        if (
                          formregisterShelter.password ==
                          formregisterShelter.passwordrepeat
                        ) {
                          actions.registerShelter(formregisterShelter);
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
      ) : (
        navigateProfile()
      )}
    </>
  );
};
