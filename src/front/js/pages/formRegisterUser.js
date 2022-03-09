import React, { useState, useContext } from "react";
import "../../styles/formRegisterUser.css";
import { Context } from "../store/appContext.js";

export const FormRegisterUser = () => {
  const [formregister, setFormregister] = useState({});
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-5 formRegisterUser_view">
            <div className="row formRegisterUser_title">
              <div className="col-xl-12">
                <h2>¡Quiero Adoptar!</h2>
              </div>
            </div>
            <form>
              <div className="row formRegisterUser_GroupInput">
                <div className="row">
                  <label htmlFor="name">Nombre</label>
                  <input
                    onChange={(event) => {
                      setFormregister({
                        ...formregister,
                        [event.target.name]: event.target.value,
                      });
                    }}
                    type="text"
                    className="form-control formRegisterUser_Input"
                    name="name"
                    required
                  />
                </div>
                <div className="row">
                  <label htmlFor="surname">Apellidos</label>
                  <input
                    onChange={(event) => {
                      setFormregister({
                        ...formregister,
                        [event.target.name]: event.target.value,
                      });
                    }}
                    type="text"
                    className="form-control formRegisterUser_Input"
                    name="surname"
                    required
                  />
                </div>
                <div className="row">
                  <label htmlFor="email">Correo</label>
                  <input
                    onChange={(event) => {
                      setFormregister({
                        ...formregister,
                        [event.target.name]: event.target.value,
                      });
                    }}
                    type="email"
                    className="form-control formRegisterUser_Input"
                    name="email"
                    required
                  />
                </div>
                <div className="row">
                  <label htmlFor="password">Contraseña:</label>
                  <input
                    onChange={(event) => {
                      setFormregister({
                        ...formregister,
                        [event.target.name]: event.target.value,
                      });
                    }}
                    type="password"
                    className="form-control formRegisterUser_Input"
                    name="password"
                    required
                  />
                </div>
                <div className="row">
                  <label htmlFor="passwordrepeat">Confirmar Contraseña</label>
                  <input
                    onChange={(event) => {
                      setFormregister({
                        ...formregister,
                        [event.target.name]: event.target.value,
                      });
                    }}
                    type="password"
                    className="form-control formRegisterUser_Input"
                    name="passwordrepeat"
                    required
                  />
                </div>
                <div className="row">
                  <div className="col-xl-6">
                    <label htmlFor="age">Edad:</label>
                    <input
                      onChange={(event) => {
                        setFormregister({
                          ...formregister,
                          [event.target.name]: parseInt(event.target.value),
                        });
                      }}
                      type="number"
                      className="form-control formRegisterUser_inputAgeAndCity"
                      name="age"
                    />
                  </div>
                  <div className="col-xl-6">
                    <label htmlFor="city">Ciudad:</label>
                    <input
                      onChange={(event) => {
                        setFormregister({
                          ...formregister,
                          [event.target.name]: event.target.value,
                        });
                      }}
                      type="text"
                      className="form-control formRegisterUser_inputAgeAndCity"
                      name="city"
                    />
                  </div>
                </div>
                <div className="row">
                  <label htmlFor="address">Dirección:</label>
                  <input
                    onChange={(event) => {
                      setFormregister({
                        ...formregister,
                        [event.target.name]: event.target.value,
                      });
                    }}
                    type="text"
                    className="form-control formRegisterUser_Input"
                    name="address"
                  />
                </div>
                <div className="col-XL-12 mt-2 d-flex justify-content-end mt-4">
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      if (
                        formregister.password == formregister.passwordrepeat
                      ) {
                        actions.registerUser(formregister);
                      }
                    }}
                    className="btn formRegisterUser_button"
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
