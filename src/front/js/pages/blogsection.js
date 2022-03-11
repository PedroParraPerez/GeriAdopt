import React from "react";
import { Link } from "react-router-dom";
import perrogafasblog from "../../img/perrogafasblog.jpg";
import "../../styles/blogsection.css";
import fotoblog1section from "../../img/fotoblog1section.jpg";
import fotoblogsection2 from "../../img/fotoblogsection2.jpg";
import fotoblogsection3 from "../../img/fotoblogsection3.jpg";

export const BlogSection = () => {
  return (
    <>
      <div className="container">
        <div className="headerblogsection">
          <h1 className="tituloblog1">Blog de Noticias </h1>
          <img
            className="perrogafasblog"
            src={perrogafasblog}
            alt="perrogafasblog"
          ></img>
          <h2 className="tituloblog2">Actualidad</h2>
          <hr className="lineablogsection"></hr>
        </div>

        <div className="container bodyblogsection">
          <div className="row cardsblogsection">
            <div className="col-md-4 box">
              <div className="cardblogsection">
                <img
                  src={fotoblog1section}
                  className="card-img-top fotoblogsection"
                  alt="fotoblog1section"
                />
                <div className="card-body blogbodysection1">
                  <h5 className="card-title blogtitle">
                    Cinco pasos que debes saber antes de adoptar
                  </h5>
                  <p className="card-text blogtextsection">
                    Conoce los pasos más importantes que debes saber antes de
                    darle la bienvenida a un nuevo miembro de la familia y así
                    estés preparado.
                  </p>
                  <button href="#" className="btn  botonblogsection">
                    Leer más
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4 box">
              <div className="cardblogsection">
                <img
                  src={fotoblogsection2}
                  className="card-img-top fotoblogsection"
                  alt="fotoblogsection2"
                />
                <div className="card-body">
                  <h5 className="card-title blogtitle">
                    ¿Qué tan feliz te hace una mascota?
                  </h5>
                  <p className="card-text blogtextsection">
                    Diversos estudios han encontrado las estadísticas exactas
                    para saber qué tan feliz y qué tanta influencia tienen los
                    animales en las personas.
                  </p>
                  <Link to="/blogart">
                    <button className="botonblogsection">Leer más</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 box">
              <div className="cardblogsection">
                <img
                  src={fotoblogsection3}
                  className="card-img-top fotoblogsection"
                  alt="fotoblogsection3"
                />
                <div className="card-body">
                  <h5 className="card-title blogtitle">
                    ¿Cómo hago para viajar con mis mascotas?
                  </h5>
                  <p className="card-text blogtextsection">
                    Cada día se facilita más viajar con nuestras mascotas que
                    son parte de nuestra familia y que queremos que siempre
                    disfruten con nosotros.
                  </p>
                  <button href="#" className="btn  botonblogsection">
                    Leer más
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-md-3 d-flex justify-content-center">
              <Link to="/blognoticias">
                <button className=" botonblogsectionfinal">Más Noticias</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
