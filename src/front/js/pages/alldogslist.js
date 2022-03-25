import React, { useEffect, useContext } from "react";
import "../../styles/alldogslist.css";
import { Card } from "../component/card.js";
import { FilterBar } from "../component/filterBar.js";
import { Context } from "../store/appContext.js";

export const AllDogsList = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getAllAnimal();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <FilterBar />
        <div className=" row Alldoglist_cardlist">
          <Card />
        </div>
      </div>
    </>
  );
};
