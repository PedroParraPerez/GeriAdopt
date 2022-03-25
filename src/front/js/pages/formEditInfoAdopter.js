import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/formRegisterUser.css";
import { Context } from "../store/appContext.js";

export const FormEditInfoAdopter = () => {
  const [info, setInfo] = useState({});
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getAdopterInfo();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-5 formRegisterUser_view">
            <div className="row formRegisterUser_title">
              <div className="col-xl-12">
                <h2>EDITAR INFORMACION DE ADOPTANTE</h2>
              </div>
            </div>
            <form>
              <div className="row formRegisterUser_GroupInput">
                <div className="row">
                  <label htmlFor="name">Nombre</label>
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
                    placeholder={store.adopterInfo.name}
                  />
                </div>
                <div className="row">
                  <label htmlFor="surname">Apellidos</label>
                  <input
                    onChange={(event) => {
                      setInfo({
                        ...info,
                        [event.target.name]: event.target.value,
                      });
                    }}
                    type="text"
                    className="form-control formRegisterUser_Input"
                    name="surname"
                    placeholder={store.adopterInfo.surname}
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
                    placeholder={store.adopterInfo.email}
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
                    <label htmlFor="age">Edad:</label>
                    <input
                      onChange={(event) => {
                        setInfo({
                          ...info,
                          [event.target.name]: parseInt(event.target.value),
                        });
                      }}
                      type="number"
                      className="form-control formRegisterUser_inputAgeAndCity"
                      name="age"
                      placeholder={store.adopterInfo.age}
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
                      placeholder={store.adopterInfo.city}
                    />
                  </div>
                </div>
                <div className="row">
                  <label htmlFor="address">Dirección:</label>
                  <input
                    onChange={(event) => {
                      setInfo({
                        ...info,
                        [event.target.name]: event.target.value,
                      });
                    }}
                    type="text"
                    className="form-control formRegisterUser_Input"
                    name="address"
                    placeholder={store.adopterInfo.address}
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
                      if (info.password == info.passwordrepeat) {
                        actions.editInfoAdopter(info);
                      } else {
                        alert("Las contraseñas no coinciden");
                      }
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
