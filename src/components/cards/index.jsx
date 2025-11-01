import React from "react";
import CardsItem from "../CardsItem";
import {
  FaArrowAltCircleUp,
  FaArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";
const Cards = ({ income, expense, total }) => {
  return (
    <div className="w-full max-w-4xl mx-auto my-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
      <CardsItem title="Entradas" Icon={FaArrowAltCircleUp} value={income} />
      <CardsItem title="Saídas" Icon={FaArrowAltCircleDown} value={expense} />
      <CardsItem title="Total" Icon={FaDollarSign} value={total} />
    </div>
  );
};

export default Cards;
