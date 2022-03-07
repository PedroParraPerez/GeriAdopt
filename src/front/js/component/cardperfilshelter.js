import React from "react";

import "../../styles/allShelters.css";
import SOSPeludos from "../../img/sospeludos.jpeg";
import ImgTitleFavs from "../../img/imagetitlefavs.png";
import "../../styles/CardPerfilShelter.css";
export const CardPerfilShelter = () => {
  return (
    <>
      <div className="container-fluid ">
        <div className="row shelter_shelterprofile1">
          <div className="col-xl-2 shelter_imgprofile">
            <img src={SOSPeludos} alt="profilephoto" className="shelterLogo" />
          </div>
          <div className="col-xl-4 shelter_shelterInfo">
            <div className="row shelter_edit">
              <div className="col-xl-12"></div>
            </div>
            <div className="row">
              <div className="col-xl-6 shelter_primayinfo">
                <p>
                  <b>
                    <span className="shelter_labelprofileinfo">Nombre: </span>
                    <br></br>
                    SOS Peludos España
                  </b>
                </p>
                <p>
                  <b>
                    <span className="shelter_labelprofileinfo">Ciudad: </span>
                    <br></br>
                    Madrid
                  </b>
                </p>
              </div>
              <div className="col-xl-6 shelter_secundaryinfo">
                <p>
                  <b>
                    <span className="shelter_labelprofileinfo">Teléfono: </span>
                    <br></br>
                    666554477
                  </b>
                </p>
                <p>
                  <b>
                    <span className="shelter_labelprofileinfo">Correo: </span>
                    sospeludos.es@gmail.com
                  </b>
                </p>
              </div>
              <button className="  justify-content-center cardperfilshelter-boton">
                Contactar con Protectora
              </button>
            </div>
          </div>
        </div>
        <br></br>
        <div className="row shelter_shelterprofile2">
          <div className="col-xl-2 shelter_imgprofile">
            <img src={SOSPeludos} alt="profilephoto" className="shelterLogo" />
          </div>
          <div className="col-xl-4 shelter_shelterInfo">
            <div className="row shelter_edit">
              <div className="col-xl-12"></div>
            </div>
            <div className="row">
              <div className="col-xl-6 shelter_primayinfo">
                <p>
                  <b>
                    <span className="shelter_labelprofileinfo">Nombre: </span>
                    <br></br>
                    Rivanimal
                  </b>
                </p>
                <p>
                  <b>
                    <span className="shelter_labelprofileinfo">Ciudad: </span>
                    <br></br>
                    Madrid
                  </b>
                </p>
              </div>
              <div className="col-xl-6 shelter_secundaryinfo">
                <p>
                  <b>
                    <span className="shelter_labelprofileinfo">Teléfono: </span>
                    <br></br>
                    656395674
                  </b>
                </p>
                <p>
                  <b>
                    <span className="shelter_labelprofileinfo">Web: </span>
                    <br></br>
                    www.rivanimal.org
                  </b>
                </p>
              </div>
              <button className="  justify-content-center cardperfilshelter-boton">
                Contactar con Protectora
              </button>
            </div>
          </div>
        </div>
        <br></br>
        <div className="row shelter_shelterprofile3">
          <div className="col-xl-2 shelter_imgprofile">
            <img src={SOSPeludos} alt="profilephoto" className="shelterLogo" />
          </div>
          <div className="col-xl-4 shelter_shelterInfo">
            <div className="row shelter_edit">
              <div className="col-xl-12"></div>
            </div>
            <div className="row">
              <div className="col-xl-6 shelter_primayinfo">
                <p>
                  <b>
                    <span className="shelter_labelprofileinfo">Nombre: </span>
                    <br></br>
                    AGAR
                  </b>
                </p>
                <p>
                  <b>
                    <span className="shelter_labelprofileinfo">Ciudad: </span>
                    <br></br>
                    Madrid
                  </b>
                </p>
              </div>
              <div className="col-xl-6 shelter_secundaryinfo">
                <p>
                  <b>
                    <span className="shelter_labelprofileinfo">Web: </span>
                    <br></br>
                    www.asociacionagar.es
                  </b>
                </p>
                <p>
                  <b>
                    <span className="shelter_labelprofileinfo">Correo: </span>
                    <br></br>
                    asociacion.agar@gmail.com
                  </b>
                </p>
              </div>
              <button className="  justify-content-center cardperfilshelter-boton">
                Contactar con Protectora
              </button>
            </div>
          </div>
        </div>
        <br></br>
        <div className="row shelter_shelterprofile4">
          <div className="col-xl-2 shelter_imgprofile">
            <img src={SOSPeludos} alt="profilephoto" className="shelterLogo" />
          </div>
          <div className="col-xl-4 shelter_shelterInfo">
            <div className="row shelter_edit">
              <div className="col-xl-12"></div>
            </div>
            <div className="row">
              <div className="col-xl-6 shelter_primayinfo">
                <p>
                  <b>
                    <span className="shelter_labelprofileinfo">Nombre: </span>
                    <br></br>
                    Animal Rescue Spain
                  </b>
                </p>
                <p>
                  <b>
                    <span className="shelter_labelprofileinfo">Ciudad: </span>
                    <br></br>
                    Madrid
                  </b>
                </p>
              </div>
              <div className="col-xl-6 shelter_secundaryinfo">
                <p>
                  <b>
                    <span className="shelter_labelprofileinfo">Teléfono: </span>
                    <br></br>
                    609750798
                  </b>
                </p>
                <p>
                  <b>
                    <span className="shelter_labelprofileinfo">Web: </span>
                    <br></br>
                    www.animalrescuespain.es
                  </b>
                </p>
              </div>
              <button className="  justify-content-center cardperfilshelter-boton">
                Contactar con Protectora
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
