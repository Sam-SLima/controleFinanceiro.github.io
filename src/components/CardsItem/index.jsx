import React from "react";

const CardsItem = ({ title, Icon, value }) => {
  return (
    <div className="flex flex-col items-center bg-gray-600 rounded-[5px] py-1.5 px-4 w-[30%]">
      <header className="flex items-center justify-around w-full  gap-2.5 my-5 mx-auto">
        <h1 className="text-2xl">{title}</h1>
        <Icon className="text-[20px]" />
      </header>
      <span className="text-3xl font-bold">{value}</span>
    </div>
  );
};

export default CardsItem;
