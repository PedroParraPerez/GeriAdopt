import React, { useState, useContext } from "react";
import "../../styles/contactus.css";

export const ContactUs = () => {
  return (
    <>
      <div className="container-fluid">
        <section class="mb-4">
          <h2 class="h1-responsive font-weight-bold text-center my-4 titleContact">
            ¡Queremos saber de ti!
          </h2>

          <p class="text-center w-responsive mx-auto mb-5">
            ¿Tienes preguntas o sugerencias? No dudes en hacernoslo saber.
            Nuestro equipo respondera tu consulta a la brevedad :)
          </p>

          <div class="row">
            <div class="col-md-9 mb-md-0 mb-5">
              <form
                id="contact-form"
                name="contact-form"
                action="mail.php"
                method="POST"
              >
                <div class="row">
                  <div class="col-md-6">
                    <div class="md-form mb-0">
                      <label for="name" class="">
                        Nombre (requerido)
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="md-form mb-0">
                      <label for="email" class="">
                        Correo (requerido)
                      </label>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        class="form-control"
                      />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-12">
                    <div class="md-form mb-0">
                      <label for="subject" class="">
                        Asunto
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        class="form-control"
                      />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-12">
                    <div class="md-form">
                      <label for="message">Mensaje</label>
                      <textarea
                        type="text"
                        id="message"
                        name="message"
                        rows="4"
                        class="form-control md-textarea"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </form>

              <div class="text-center text-md-left">
                <a
                  class="btn btn-primary btnContact"
                  onclick="document.getElementById('contact-form').submit();"
                >
                  Enviar
                </a>
              </div>
              <div class="status"></div>
            </div>

            <div class="col-md-3 text-center">
              <ul class="list-unstyled mb-0">
                <li>
                  <i class="fas fa-map-marker-alt fa-2x"></i>
                  <p>Madrid, España</p>
                </li>

                <li>
                  <i class="fas fa-phone mt-4 fa-2x"></i>
                  <p>+ 655 12 00 11</p>
                </li>

                <li>
                  <i class="fas fa-envelope mt-4 fa-2x"></i>
                  <p>contacto@geriadopt.com</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
