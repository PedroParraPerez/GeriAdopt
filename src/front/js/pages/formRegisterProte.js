import React from "react";
import "../../styles/formRegisterProte.css";
import FormRegisterProtePhoto from "../../img/form.register.user.photo.png";

export const FormRegisterProte = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-5 formRegisterProte_view">
            <img
              src={FormRegisterProtePhoto}
              className="formRegisterProte_Photo"
              alt="form-photo"
            />
            <div className="row formRegisterProte_title">
              <div className="col-xl-12">
                <h2>REGISTRO PROTECTORAS</h2>
              </div>
            </div>
            <form>
              <div className="row formRegisterProte_GroupInput">
                <div className="row">
                  <label for="name">Nombre de la protectora:</label>
                  <input
                    type="text"
                    class="form-control formRegisterProte_Input"
                    name="name"
                    required
                  />
                </div>
                <div className="row">
                  <label for="email">Correo</label>
                  <input
                    type="email"
                    class="form-control formRegisterProte_Input"
                    name="email"
                    required
                  />
                </div>
                <div className="row">
                  <label for="password">Contraseña:</label>
                  <input
                    type="password"
                    class="form-control formRegisterProte_Input"
                    name="password"
                    required
                  />
                </div>
                <div className="row">
                  <label for="passwordrepeat">Confirmar Contraseña</label>
                  <input
                    type="password"
                    class="form-control formRegisterProte_Input"
                    name="passwordrepeat"
                    required
                  />
                </div>
                <div className="row">
                  <div className="col-xl-6">
                    <label for="direction">Dirección:</label>
                    <input
                      type="text"
                      class="form-control formRegisterProte_Input"
                      name="direction"
                    />
                  </div>
                  <div className="col-xl-6">
                    <label for="city">Ciudad:</label>
                    <input
                      type="text"
                      class="form-control inputAgeAndCity"
                      name="city"
                    />
                  </div>
                </div>
                <div class="col-XL-12 mt-2 d-flex justify-content-end mt-4">
                  <button class="btn formRegisterProte_button" type="submit">
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
