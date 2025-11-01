import React from "react";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from "react-icons/fa";

const TableItem = ({ item, onDelete }) => {
  const isExpense = item.expense;

  return (
    <tr className="border-t hover:bg-teal-50 transition-colors">
      <td className="px-4 py-3 font-medium text-gray-800 break-words">
        {item.descricao}
      </td>

      <td className="px-4 py-3 text-gray-700">
        R$ {Number(item.valor).toFixed(2).replace(".", ",")}
      </td>

      <td className="px-4 py-3">
        {isExpense ? (
          <div className="flex items-center gap-2 text-rose-600">
            <FaRegArrowAltCircleDown />
            <span>Saída</span>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-teal-600">
            <FaRegArrowAltCircleUp />
            <span>Entrada</span>
          </div>
        )}
      </td>

      <td className="px-4 py-3 text-center">
        <button
          onClick={() => onDelete(item.id)}
          className="text-gray-400 hover:text-rose-600 transition-colors"
          title="Excluir transação"
        >
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default TableItem;
