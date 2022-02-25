import React from "react";
import "../../styles/formRegisterUser.css";
import FormRegisterUserPhoto from "../../img/form.register.user.photo.png";

export const FormRegisterUser = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-5 formRegisterUser_view">
            {/* <img
              src={FormRegisterUserPhoto}
              className="formRegisterUser_Photo"
              alt="form-photo"
            /> */}
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
                    type="text"
                    className="form-control formRegisterUser_Input"
                    name="name"
                    required
                  />
                </div>
                <div className="row">
                  <label htmlFor="surname">Apellidos</label>
                  <input
                    type="text"
                    className="form-control formRegisterUser_Input"
                    name="surname"
                    required
                  />
                </div>
                <div className="row">
                  <label htmlFor="email">Correo</label>
                  <input
                    type="email"
                    className="form-control formRegisterUser_Input"
                    name="email"
                    required
                  />
                </div>
                <div className="row">
                  <label htmlFor="password">Contraseña:</label>
                  <input
                    type="password"
                    className="form-control formRegisterUser_Input"
                    name="password"
                    required
                  />
                </div>
                <div className="row">
                  <label htmlFor="passwordrepeat">Confirmar Contraseña</label>
                  <input
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
                      type="number"
                      className="form-control formRegisterUser_inputAgeAndCity"
                      name="age"
                    />
                  </div>
                  <div className="col-xl-6">
                    <label htmlFor="city">Ciudad:</label>
                    <input
                      type="text"
                      className="form-control formRegisterUser_inputAgeAndCity"
                      name="city"
                    />
                  </div>
                </div>
                <div className="row">
                  <label htmlFor="direction">Dirección:</label>
                  <input
                    type="text"
                    className="form-control formRegisterUser_Input"
                    name="direction"
                  />
                </div>
                <div className="col-XL-12 mt-2 d-flex justify-content-end mt-4">
                  <button className="btn formRegisterUser_button" type="submit">
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
