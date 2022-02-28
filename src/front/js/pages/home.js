import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";

import FamilyAdopted from "../../img/FamilyAdopted.png";
import HeartHeader from "../../img/HeartHeader.png";
import twoLives from "../../img/twoLives.png";
import adoption from "../../img/adoption.png";
import dogWalking from "../../img/dogWalking.png";
import AdopterHome from "../../img/AdopterHome.jpeg";
import ProtectoraHome from "../../img/ProtectoraHome.jpg";
import dogbloghome from "../../img/dogbloghome.jpeg";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="container-fluid">
        <div className="row containerHeader">
          <div className="col-md-1"></div>
          <div className="col-md-5">
            <h2 className="textoHeader">
              ¡En GeriAdopt Puedes Encontrar Tu Peludo Ideal! Únete a Nuestra
              Comunidad y suma un miembro a tu familia
            </h2>
            <button type="button" className="buttonHeader">
              ¡Encuentra tu Match!
            </button>
            <img className="heartHeader" src={HeartHeader} alt="heart" />
          </div>
          <div className="col-md-5">
            <img
              className="familyHeader"
              src={FamilyAdopted}
              alt="Family Adopted"
            />
          </div>
        </div>
        <div className="row middleBarHeader">
          <div className="row">
            <h3 className="benefitsHeader">Beneficios de Adoptar un Animal</h3>
          </div>
          <div className="col-md-4">
            <div className="divIconTextHeader">
              <img
                className="middleBarIconHeader"
                src={twoLives}
                alt="salvas dos vidas"
              />
              <p className="textmiddleBarHeader">
                Salvas dos vidas, la del animal que adoptas y la del nuevo
                rescatado
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="divIconTextHeader">
              <img
                className="middleBarIconHeader"
                src={adoption}
                alt="amor de adopción"
              />
              <p className="textmiddleBarHeader">
                Los animales rescatados son muy agradecidos y notarás su amor al
                adoptar
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="divIconTextHeader">
              <img
                className="middleBarIconHeader"
                src={dogWalking}
                alt="paseando el perro"
              />
              <p className="textmiddleBarHeader">
                Caminar a diario con tu perro te permitira tener una vida más
                activa y sana
              </p>
            </div>
          </div>
        </div>

        <div className="row d-flex justify-content-between ">
          <div className="col-md-1"></div>
          <div className="col-md-4">
            <div className="cardContainerHome">
              <img
                src={AdopterHome}
                className="card-img-top cardPicHome"
                alt="perfil adoptante"
              />
              <div className="card-body cardBodyHome">
                <p className="card-text cardTextHome">
                  En GeriAdopt encuentra a tu peludo ideal y suma un miembro más
                  a tu familia. <br />
                  Encuentra, enamorate y contacta con la protectora, asi de
                  simple.
                  <br />
                  ¡Crea tu perfil con nosotros!
                </p>
                <button className="buttonHomeRegis">¡Quiero Adoptar!</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="cardContainerHome">
              <img
                src={ProtectoraHome}
                className="card-img-top cardPicHome"
                alt="perfil protectora"
              />
              <div className="card-body cardBodyHome">
                <p className="card-text cardTextHome">
                  Si tienes una protectora y quieres dar difusión a tus
                  animalitos rescatados que buscan un hogar, esta es tu
                  oportunidad.
                  <br />
                  ¡Registrate como Protectora!
                </p>
                <button className="buttonHomeRegis">
                  Quiero Registrar mi Protectora
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>

        <div className="row gotoblogHome">
          <div className="col-md-1"></div>
          <div className="col-md-6">
            <div className="blogcenterHome">
              <img
                className="dogBlogHome"
                src={dogbloghome}
                alt="dog with newspaper pages"
              />
            </div>
          </div>
          <div className="col-md-4">
            <h4 className="blogTitleHome">Blog de Noticias</h4>
            <div className="textoBlogHomeDiv">
              <p className="textoBlogHome">
                Entérate de todas las novedades del mundo de la adopción animal
                en España. <br />
                Novedades, eventos, tips y ¡mucho más!
              </p>
            </div>
            <div className="buttonBlogHomePosition">
              <button className="buttonBlogHome">Accede al Blog</button>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>

        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <h4 className="quoteHome">
              “Hasta que no hayas amado a un animal, una parte de tu alma
              permanecerá dormida” <br />
              -Anatole France
            </h4>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </>
  );
};
