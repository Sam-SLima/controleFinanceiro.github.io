import TableItem from "../TableItem";

const TableContainer = ({ itens, setItens }) => {
  const onDelete = (id) => {
    const newArray = itens.filter((transaction) => transaction.id !== id);
    setItens(newArray);
    localStorage.setItem("transactions", JSON.stringify(newArray));
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-6 bg-white rounded-xl shadow-sm overflow-x-auto">
      <table className="min-w-full text-sm text-left text-gray-700 border-collapse">
        <thead className="bg-teal-100 text-teal-900 uppercase text-xs font-semibold tracking-wide">
          <tr>
            <th className="px-4 py-3">Descrição</th>
            <th className="px-4 py-3">Valor</th>
            <th className="px-4 py-3">Tipo</th>
            <th className="px-4 py-3 text-center">Ações</th>
          </tr>
        </thead>

        <tbody>
          {itens?.length > 0 ? (
            itens.map((item, index) => (
              <TableItem key={index} item={item} onDelete={onDelete} />
            ))
          ) : (
            <tr>
              <td
                colSpan={4}
                className="px-4 py-6 text-center text-gray-500 italic"
              >
                Nenhuma transação registrada.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableContainer;
