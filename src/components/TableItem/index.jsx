import React from "react";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from "react-icons/fa";
const TableItem = ({ item, onDelete }) => {
  return (
    <tr>
      <td>{item.descricao}</td>
      <td>{item.valor}</td>
      <td>
        {item.expense ? (
          <FaRegArrowAltCircleDown color="red" />
        ) : (
          <FaRegArrowAltCircleUp color="green" />
        )}
      </td>
      <td>
        {" "}
        <FaTrash onClick={() => onDelete(item.id)} />{" "}
      </td>
    </tr>
  );
};

export default TableItem;
