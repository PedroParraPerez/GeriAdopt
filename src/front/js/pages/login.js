import React, { useContext, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

import "../../styles/login.css";
import { Context } from "../store/appContext";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [checked, setChecked] = useState(false);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   navigate("/");
  // }, [store.logedUser]);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-5 login_view">
            <div className="row login_title">
              <div className="col-xl-12">
                <h2>INICIAR SESION</h2>
              </div>
            </div>
            <form>
              <div className="row login_GroupInput">
                <div className="row">
                  <label htmlFor="email">Correo</label>
                  <input
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                    type="email"
                    className="form-control login_Input"
                    name="email"
                    required
                  />
                </div>
                <div className="row">
                  <label htmlFor="password">Contraseña:</label>
                  <input
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                    type="password"
                    className="form-control login_Input"
                    name="password"
                    required
                  />
                </div>
                <div className="row">
                  <label htmlFor="password">¿Eres protectora?:</label>
                  <input
                    onChange={(event) => {
                      setChecked(!checked);
                    }}
                    defaultChecked={checked}
                    type="checkbox"
                    className=""
                    name="type"
                  />
                </div>
                <div className="col-XL-12 mt-2 d-flex justify-content-end mt-4">
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      actions.login(email, password, checked);
                    }}
                    className="btn login_button"
                  >
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
