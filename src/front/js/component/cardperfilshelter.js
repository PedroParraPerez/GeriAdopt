import React, { useContext, useEffect, useState } from "react";
import "../../styles/allShelters.css";
import "../../styles/CardPerfilShelter.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const CardPerfilShelter = () => {
  const { store, actions } = useContext(Context);
  const [cardshelter, setCardshelter] = useState([]);

  useEffect(() => {
    setCardshelter(
      store.allShelters.map((shelter) => {
        return (
          <div className="container-fluid ">
            <div
              key={shelter.id.toString()}
              className="Cardperfilshelter_wrapcard"
            >
              <div className="row shelter_shelterprofile1">
                <div className="col-xl-2 shelter_imgprofile">
                  <img
                    src={shelter.image}
                    alt="profilephoto"
                    className="shelterLogo"
                  />
                </div>
                <div className="col-xl-10 shelter_shelterInfo">
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
                          {shelter.city}
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
                          {shelter.telephone}
                        </b>
                      </p>
                      <p>
                        <b>
                          <span className="shelter_labelprofileinfo">
                            Correo:{" "}
                          </span>
                          {shelter.email}
                        </b>
                      </p>
                    </div>
                    <Link to="/landingshelter">
                      <button className="  justify-content-center cardperfilshelter-boton">
                        Ver nuestros animales
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })
    );
  }, [store.allShelters]);
  return <>{cardshelter}</>;
};
