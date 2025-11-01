import React from "react";

const CardsItem = ({ title, Icon, value, color, highlight = false }) => {
  const bgColor = highlight
    ? "bg-gradient-to-r from-teal-500 to-amber-500 text-white"
    : "bg-white text-gray-800";

  const iconColor =
    color === "teal"
      ? "text-teal-600"
      : color === "rose"
      ? "text-rose-600"
      : "text-amber-500";

  return (
    <div
      className={`flex flex-col justify-between rounded-xl shadow-sm border border-gray-200 ${bgColor} p-5 transition-transform hover:scale-[1.02]`}
    >
      <header className="flex items-center justify-between mb-4">
        <h1 className="text-sm font-semibold uppercase tracking-wide">
          {title}
        </h1>
        <Icon className={`text-xl ${highlight ? "text-white" : iconColor}`} />
      </header>
      <span
        className={`text-2xl sm:text-3xl font-bold ${
          highlight ? "text-white" : "text-gray-800"
        }`}
      >
        {value}
      </span>
    </div>
  );
};

export default CardsItem;
