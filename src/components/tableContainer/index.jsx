import React from "react";
import TableItem from "../TableItem";
const TableContainer = ({ itens, setItens }) => {
  const onDelete = (id) => {
    const newArray = itens.filter((transaction) => transaction.id !== id);
    setItens(newArray);
    localStorage.setItem("transactions", JSON.stringify(newArray));
  };
  return (
    <table className="w-[98%] bg-amber-500 p-5 rounded-[5px] my-5 mx-auto">
      <thead>
        <tr>
          <th className="text-start border-b-[inset] pb-1.5 w-auto">
            Descrição
          </th>
          <th className="text-start border-b-[inset] pb-1.5 w-auto">Valor</th>
          <th className="text-start border-b-[inset] pb-1.5 w-auto">Tipo</th>
          <th className="text-start border-b-[inset] pb-1.5 w-auto"></th>
        </tr>
      </thead>
      <tbody>
        {itens?.map((item, index) => (
          <TableItem key={index} item={item} onDelete={onDelete} />
        ))}
      </tbody>
    </table>
  );
};

export default TableContainer;
