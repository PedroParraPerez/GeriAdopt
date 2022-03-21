import React, { useContext, useEffect, useState } from "react";
import profileimagegeneric from "../../img/profile_image_generic.jpg";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/card_with_info_shelters.css";
export const CardShelter = () => {
  const { store, actions } = useContext(Context);
  const [cardshelter, setCardshelter] = useState([]);

  useEffect(() => {
    setCardshelter(
      store.allShelters.map((shelter) => {
        return (
          <div
            key={shelter.id.toString()}
            className="row cardWithInfo_wrapcard"
          >
            <div className="col-md-4 cardWithInfo_placelog">
              <img
                src={shelter.image ? shelter.image : profileimagegeneric}
                alt="profilephoto"
                className="cardWithInfo_shelterLogo"
              />
            </div>
            <div className="col-md-8 cardWithInfo_allinfo">
              <div className="row cardWithInfo_primayinfo">
                <div className="col-md-12">
                  <span>
                    <b>
                      <span className="cardWithInfo_labelprofileinfo">
                        Nombre: {shelter.name}
                      </span>
                      <br />
                    </b>
                  </span>
                  <span>
                    <b>
                      <span className="cardWithInfo_labelprofileinfo">
                        Ciudad: {shelter.city}
                      </span>
                      <br />
                    </b>
                  </span>
                </div>
              </div>
              <div className="row cardWithInfo_secundaryinfo">
                <div className="col-md-12">
                  <span>
                    <b>
                      <span className="cardWithInfo_labelprofileinfo">
                        Teléfono: {shelter.telephone}
                      </span>
                      <br />
                    </b>
                  </span>
                  <span>
                    <b>
                      <span className="cardWithInfo_labelprofileinfo">
                        Correo: {shelter.email}
                      </span>
                    </b>
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <Link to="/landingshelter">
                    <button className=" btn cardWithInfo_button">
                      Ver nuestros animales
                    </button>
                  </Link>
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
