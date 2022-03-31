import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/formRegisterUser.css";
import { Context } from "../store/appContext.js";

export const FormEditInfoShelter = () => {
  const [info, setInfo] = useState({});
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getShelterInfo();
  }, []);

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
                    placeholder={store.shelterInfo.name}
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
                    placeholder={store.shelterInfo.email}
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
                      placeholder={store.shelterInfo.address}
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
                      placeholder={store.shelterInfo.city}
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
                    placeholder={store.shelterInfo.tlf}
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
