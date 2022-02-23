import React from "react";
import "../../styles/blognoticias.css";
import fotoblog1section from "../../img/fotoblog1section.jpg";
import fotoblogsection2 from "../../img/fotoblogsection2.jpg";
import fotoblogsection3 from "../../img/fotoblogsection3.jpg";
import fotoblogsection4 from "../../img/fotoblogsection4.jpg";

export const BlogNoticias = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="col-md-1"></div>
        <div className="col-md-10 justify-content-center">
          <h2 className="blognoticias_titulonotica">Todas las Noticias</h2>

          <div className="col-md-1"></div>
        </div>
        <div>
          <hr className="blognoticias_linea"></hr>
        </div>

        <div className="blognoticias_body">
          <h2 className="blognoticias_titulo2">Últimas Noticias</h2>
          <div className="row">
            <div className="col-md-6 blognoticias-card1">
              <div className="row g-0">
                <div className="col-md-4 blognoticias-cardimg">
                  <img
                    src={fotoblog1section}
                    className="img-fluid blognoticias-foto1"
                    alt="perrocámara"
                  />
                </div>
                <div className="col-md-8">
                  <div className="blognoticias-card-body">
                    <h5 className="card-title justify-content-center blognoticias-titulo1">
                      Cinco pasos que debes saber antes de adoptar
                    </h5>
                    <p className="card-text blognoticias-texto1">
                      Conoce los pasos más importantes que debes saber antes de
                      darle la bienvenida a un nuevo miembro de la familia.
                    </p>
                    <a
                      href="#"
                      className="btn btn-primary justify-content-center blognoticias-boton"
                    >
                      Leer más
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6  blognoticias-card2">
              <div className="row g-0">
                <div className="col-md-4 blognoticias-cardimg">
                  <img
                    src={fotoblogsection2}
                    className="img-fluid blognoticias-foto1"
                    alt="perroamo"
                  />
                </div>
                <div className="col-md-8">
                  <div className="blognoticias-card-body">
                    <h5 className="card-title justify-content-center blognoticias-titulo1">
                      ¿Qué tan feliz te hace una mascota?
                    </h5>
                    <p className="card-text blognoticias-texto2">
                      Diversos estudios han encontrado las estadísticas exactas
                      para saber qué tan feliz y qué tanta influencia tienen los
                      animales en las personas.
                    </p>
                    <a
                      href="#"
                      className="btn btn-primary justify-content-center blognoticias-boton"
                    >
                      Leer más
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6  blognoticias-card2">
              <div className="row g-0">
                <div className="col-md-4 blognoticias-cardimg">
                  <img
                    src={fotoblogsection3}
                    className="img-fluid blognoticias-foto1"
                    alt="perroviaje"
                  />
                </div>
                <div className="col-md-8">
                  <div className="blognoticias-card-body">
                    <h5 className="card-title justify-content-center blognoticias-titulo1">
                      ¿Cómo hago para viajar con mis mascotas?
                    </h5>
                    <p className="card-text blognoticias-texto3">
                      Cada día se facilita más viajar con nuestras mascotas que
                      son parte de nuestra familia y que queremos que siempre
                      disfruten con nosotros.
                    </p>
                    <a
                      href="#"
                      className="btn btn-primary justify-content-center blognoticias-boton"
                    >
                      Leer más
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6  blognoticias-card2">
              <div className="row g-0">
                <div className="col-md-4 blognoticias-cardimg">
                  <img
                    src={fotoblogsection4}
                    className="img-fluid blognoticias-foto1"
                    alt="perroviaje"
                  />
                </div>
                <div className="col-md-8">
                  <div className="blognoticias-card-body">
                    <h5 className="card-title justify-content-center blognoticias-titulo1">
                      Mejores alimentos para las cobayas
                    </h5>
                    <p className="card-text blognoticias-texto3">
                      Traemos unas recomendaciones en alimentos naturales para
                      mejorar la salud de las cobayas.
                    </p>
                    <a
                      href="#"
                      className="btn btn-primary justify-content-center blognoticias-boton"
                    >
                      Leer más
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <a
                href="#"
                className="btn btn-primary justify-content-center blognoticias-botonfinal"
              >
                Encuentra más noticias aquí
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
