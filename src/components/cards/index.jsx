import React from "react";
import CardsItem from "../CardsItem";

const Cards = () => {
  return (
    <div className="flex justify-evenly my-5 mx-auto">
      <CardsItem />
      <CardsItem />
      <CardsItem />
    </div>
  );
};

export default Cards;
