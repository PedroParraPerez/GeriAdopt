import React from "react";
import "../../styles/login.css";
import loginPhoto from "../../img/loginPhoto.png";

export const Login = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-5 login_view">
            <img src={loginPhoto} className="login_Photo" alt="form-photo" />
            <div className="row login_title">
              <div className="col-xl-12">
                <h2>INICIAR SESION</h2>
              </div>
            </div>
            <form>
              <div className="row login_GroupInput">
                <div className="row">
                  <label for="email">Correo</label>
                  <input
                    type="email"
                    class="form-control login_Input"
                    name="email"
                    required
                  />
                </div>
                <div className="row">
                  <label for="password">Contraseña:</label>
                  <input
                    type="password"
                    class="form-control login_Input"
                    name="password"
                    required
                  />
                </div>
                <div class="col-XL-12 mt-2 d-flex justify-content-end mt-4">
                  <button class="btn login_button" type="submit">
                    Entrar
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
