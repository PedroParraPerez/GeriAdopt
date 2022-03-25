import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/formRegisterUser.css";
import { Context } from "../store/appContext.js";

export const FormEditInfoShelter = () => {
  const [info, setInfo] = useState({});
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-5 formRegisterUser_view">
            <div className="row formRegisterUser_title">
              <div className="col-xl-12">
                <h2>EDITAR INFORMACION DE PROTECTORA</h2>
              </div>
            </div>
            <form>
              <div className="row formRegisterUser_GroupInput">
                <div className="row">
                  <label htmlFor="name">Nombre de la Protectora</label>
                  <input
                    onChange={(event) => {
                      setInfo({
                        ...info,
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
                  <label htmlFor="email">Correo</label>
                  <input
                    onChange={(event) => {
                      setInfo({
                        ...info,
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
                      setInfo({
                        ...info,
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
                      setInfo({
                        ...info,
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
                    <label htmlFor="age">Dirección:</label>
                    <input
                      onChange={(event) => {
                        setInfo({
                          ...info,
                          [event.target.name]: event.target.value,
                        });
                      }}
                      type="text"
                      className="form-control formRegisterUser_inputAgeAndCity"
                      name="address"
                    />
                  </div>
                  <div className="col-xl-6">
                    <label htmlFor="city">Ciudad:</label>
                    <input
                      onChange={(event) => {
                        setInfo({
                          ...info,
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
                  <label htmlFor="address">Télefono:</label>
                  <input
                    onChange={(event) => {
                      setInfo({
                        ...info,
                        [event.target.name]: event.target.value,
                      });
                    }}
                    type="text"
                    className="form-control formRegisterUser_Input"
                    name="tlf"
                  />
                </div>
                <div className="col-XL-12 mt-2 d-flex justify-content-end mt-4">
                  <Link to="/profile">
                    <button className="btn formRegisterUser_button me-3">
                      Volver
                    </button>
                  </Link>
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      actions.editInfoShelter(info);
                      console.log(info);
                    }}
                    className="btn formRegisterUser_button"
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
