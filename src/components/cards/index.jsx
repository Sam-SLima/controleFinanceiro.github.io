import React from "react";
import CardsItem from "../CardsItem";
import {
  FaArrowAltCircleUp,
  FaArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";
const Cards = ({ income, expense, total }) => {
  return (
    <div className="flex justify-evenly my-5 mx-auto">
      <CardsItem title="Entradas" Icon={FaArrowAltCircleUp} value={income} />
      <CardsItem title="Saídas" Icon={FaArrowAltCircleDown} value={expense} />
      <CardsItem title="Total" Icon={FaDollarSign} value={total} />
    </div>
  );
};

export default Cards;
