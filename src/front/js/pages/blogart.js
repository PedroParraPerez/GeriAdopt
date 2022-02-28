import React from "react";

import "../../styles/blogart.css";
import photoblogart from "../../img/fotoblogsection2.jpg";

export const BlogArt = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center ">
          <div className="col-md-10 headerblogart">
            <h2 className="blogart_titulonotica">
              ¿Qué tan feliz te hace una mascota?
            </h2>
            <img
              className="blogart_fotoart"
              src={photoblogart}
              alt="photoblogart"
            />
            <h2 className="blogart_titulo2">Actualidad</h2>
          </div>
        </div>
        
      </div>
      <div className="blogart_body">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <h4 className="blogart_sumario">
              Diversos estudios han encontrado las estadísticas exactas para
              saber qué tan feliz y qué tanta influencia tienen los animales en
              las personas
            </h4>
            <p className="blogart_parrafo">
              Son muchos los médicos que desde hace tiempo notan que la
              influencia de los animales en los humanos es impresionante, sobre
              todo en personas que padecen de alguna enfermedad. Es por ello que
              cada día se descubren nuevas cifras en diversos estudios para
              tratar este tema, y en la última encuesta realizada por la revista
              La Ciencia, arojó un resultado muy importante, que demuestra que
              no podemos olvidarnos de los animales en nuestra vida.
              <br></br>
              <br></br>
              Las conclusiones fueron que, un animal en la vida de una persona
              influye en un 95% dentro de su personalidad, y puede hacer feliz a
              alguien en un 80%, es por ello que se han empezado nuevos estudios
              con animales y personas que padecen enfermedades graves y que han
              demostrado un avance luego de tener la influencia de una mascota
              en su vida, debido al gran afecto que éstas pueden dar.
              <br></br>
              <br></br>
              Reirse y ser feliz mejora considerablemente la calidad de vida de
              las personas y al tener mascotas, ésto va en aumento, además de
              que ayudan a disminuir el nivel de estrés en los dueños y a
              olvidarse de sus problemas. Las actividades físicas con los
              perros, por ejemplo, también mejoran estas características antes
              descritas, debido a que se puede salir a hacer ejercicio, jugar o
              simplemente dar un paseo con la mascota.
            </p>
          </div>
          <div classname="col-md-1"></div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4"></div>
          <div className="col-md-4 justify-content-center blogart-botonfinal ">
            <a
              href="#"
              className="btn justify-content-center blogart-botonfinal2  "
            >
              Regresar al Blog de Noticias
            </a>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </>
  );
};
