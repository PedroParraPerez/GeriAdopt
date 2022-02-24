import React from "react";
import "../../styles/formRegisterUser.css";

export const FormRegisterUser = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-5 formRegisterUser_view">
            <div className="row formRegisterUser_title">
              <h2>¡Quiero Adoptar!</h2>
            </div>
            <form>
              <div className="row formRegisterUser_GroupInput">
                <div className="row">
                  <label for="name">Nombre</label>
                  <input
                    className="formRegisterUser_Input"
                    name="name"
                    type="text"
                  />
                </div>
                <div className="row">
                  <label for="surname">Apellidos</label>
                  <input
                    className="formRegisterUser_Input"
                    name="surname"
                    type="text"
                  />
                </div>
                <div className="row">
                  <label for="email">Correo</label>
                  <input
                    className="formRegisterUser_Input"
                    name="email"
                    type="email"
                  />
                </div>
                <div className="row">
                  <label for="password">Contraseña:</label>
                  <input
                    className="formRegisterUser_Input"
                    name="password"
                    type="password"
                  />
                </div>
                <div className="row">
                  <label for="passwordrepeat">Confirmar Contraseña</label>
                  <input
                    className="formRegisterUser_Input"
                    name="passwordrepeat"
                    type="password"
                  />
                </div>
                <div className="row">
                  <label for="direction">Dirección:</label>
                  <input
                    className="formRegisterUser_Input"
                    name="direction"
                    type="text"
                  />
                </div>
                <div className="row inputGroupAgeAndCity">
                  <div className="col-xl-6">
                    <label for="age">Edad:</label>
                    <input
                      className="formRegisterUser_Input inputAgeAndCity"
                      name="age"
                      type="number"
                    />
                  </div>
                  <div className="col-xl-6">
                    <label for="city">Ciudad:</label>
                    <input
                      className="formRegisterUser_Input inputAgeAndCity"
                      name="city"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
