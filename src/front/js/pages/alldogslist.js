import React from "react";

import { Card } from "../component/card.js";
import { FilterBar } from "../component/filterBar.js";

export const AllDogsList = () => {
  const HundleSubmit = (e) => {
    e.preventDefault();
  };

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
