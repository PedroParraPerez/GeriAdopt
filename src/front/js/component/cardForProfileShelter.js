import React, { useContext, useState } from "react";
import Mojito from "../../img/Mojito.jpg";
import "../../styles/Card.css";
import BirthdayIcon from "../../img/BirthdayIcon.png";
import GenderIcon from "../../img/GenderIcon.png";
import RazaIcon from "../../img/razaIcon.png";
import IconUbic from "../../img/IconUbicacion.png";
import editIcon from "../../img/editIcon.png";
import { Context } from "../store/appContext";
import "../../styles/buttonEditAnimal.css";

import { Link } from "react-router-dom";

export const CardProtectora = () => {
  const { store, actions } = useContext(Context);
  const [image, setImage] = useState();

  const editAnimalPhoto = async (id) => {
    var data = new FormData();
    data.append("file", image[0]);
    const response = await fetch(store.URLAPIDOGS + "editanimal/" + id, {
      method: "PUT",
      body: data,
    });

    if (response.ok) {
      actions.getAnimalsOfMyShelter();
    } else {
      alert("el guardado no se ha hecho");
    }
  };

  return (
    <>
      {store.animalsInMyShelter.map((animal) => {
        return (
          <div key={animal.id} className="card Card_carddogs">
            {!animal.image ? (
              <label className="editphotoanimal">
                <input
                  type="file"
                  multiple="multiple"
                  onChange={(event) => {
                    setImage(event.target.files);
                  }}
                  name="fileToUpload"
                />
                <img className="Card_cardphoto" src={Mojito} />
              </label>
            ) : (
              <label className="editphotoanimal">
                <input
                  type="file"
                  multiple="multiple"
                  onChange={(event) => {
                    setImage(event.target.files);
                  }}
                  name="fileToUpload"
                />
                <img className="Card_cardphoto" src={animal.image} />
              </label>
            )}

            <div className="Card_dogcardsbody">
              <h5 className="Card_card-title">
                <b>{animal.name}</b>
              </h5>
              <p className="card-text Card_textcarddog">
                {animal.short_description}
              </p>
              <button
                type="button"
                onClick={() => {
                  editAnimalPhoto(animal.id);
                }}
                className="savephotoanimal"
              >
                Guardar img
              </button>
              <div className="Card_IconsAndDescription">
                <div className="row Card_IconsCard">
                  <div className="col-xl-4">
                    <img
                      src={BirthdayIcon}
                      alt="Birthday"
                      className="Card_CaractIcon"
                    />
                    <p className="Card_iconTexInv">
                      <b>{animal.age} años</b>
                    </p>
                  </div>
                  <div className="col-xl-4">
                    <img
                      src={RazaIcon}
                      alt="breed"
                      className="Card_CaractIcon"
                    />
                    <p className="Card_iconTexInv">
                      <b>{animal.race}</b>
                    </p>
                  </div>
                  <div className="col-xl-4">
                    <img
                      src={GenderIcon}
                      alt="gender"
                      className="Card_CaractIcon"
                    />
                    <p className="Card_iconTexInv">
                      <b>{animal.gender}</b>
                    </p>
                  </div>
                </div>
              </div>
              <Link to={"/detailanimal/" + animal.id}>
                <button className="btn Card_btn">Más Info</button>
              </Link>
              <div className="editButton">
                <div className="dropdown">
                  <button className="dropbtn">
                    {" "}
                    <img src={editIcon} alt="FavButton" id="editPencil" />
                  </button>
                  <div className="dropdown-content">
                    <ul className="dropdEditStyle">
                      <Link to={"/formeditanimal/" + animal.id}>
                        <li>Mod datos</li>
                      </Link>

                      <li
                        className="deleteanimal"
                        onClick={() => {
                          if (
                            window.confirm(
                              "¿Seguro que quieres borrar este animal?"
                            )
                          ) {
                            actions.deleteAnimal(animal.id);
                          }
                        }}
                      >
                        Borrar Animal
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <p className="location"></p>
            </div>
          </div>
        );
      })}
    </>
  );
};
