import React, { useContext, useEffect, useState } from "react";
import "../../styles/allShelters.css";
import SOSPeludos from "../../img/sospeludos.jpeg";
import ImgTitleFavs from "../../img/imagetitlefavs.png";
import "../../styles/CardPerfilShelter.css";
import { Context } from "../store/appContext";

export const CardPerfilShelter = () => {
  const { store, actions } = useContext(Context);
  const [cardshelter, setCardshelter] = useState([]);

  useEffect(() => {
    setCardshelter(
      store.allShelters.map((shelter) => {
        return (
          <div key={shelter.id.toString()} className="container-fluid ">
            <div className="row shelter_shelterprofile1">
              <div className="col-xl-2 shelter_imgprofile">
                <img
                  src={SOSPeludos}
                  alt="profilephoto"
                  className="shelterLogo"
                />
              </div>
              <div className="col-xl-4 shelter_shelterInfo">
                <div className="row shelter_edit">
                  <div className="col-xl-12"></div>
                </div>
                <div className="row">
                  <div className="col-xl-6 shelter_primayinfo">
                    <p>
                      <b>
                        <span className="shelter_labelprofileinfo">
                          Nombre:{" "}
                        </span>
                        <br></br>
                        {shelter.name}
                      </b>
                    </p>
                    <p>
                      <b>
                        <span className="shelter_labelprofileinfo">
                          Ciudad:{" "}
                        </span>
                        <br></br>
                        Madrid
                      </b>
                    </p>
                  </div>
                  <div className="col-xl-6 shelter_secundaryinfo">
                    <p>
                      <b>
                        <span className="shelter_labelprofileinfo">
                          Teléfono:{" "}
                        </span>
                        <br></br>
                        666554477
                      </b>
                    </p>
                    <p>
                      <b>
                        <span className="shelter_labelprofileinfo">
                          Correo:{" "}
                        </span>
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
          </div>
        );
      })
    );
    console.log("en el componenete", store.allShelters);
  }, [store.allShelters]);
  return <>{cardshelter}</>;
};
