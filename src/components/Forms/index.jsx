import React, { useState } from "react";
import TableContainer from "../tableContainer";

const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [expense, setExpense] = useState(false);

  const gerarID = () => Math.round(Math.random() * 1000);

  const handleSave = () => {
    if (!descricao || !valor) {
      alert("Informe a descrição e o valor!");
    } else if (valor < 1) {
      alert("O Valor precisa ser positivo!");
      return;
    }

    const transaction = {
      id: gerarID(),
      descricao: descricao,
      valor: valor,
      expense: expense,
    };

    handleAdd(transaction);

    setDescricao("");
    setValor("");
  };
  return (
    <>
      <div className="w-full max-w-4xl mx-auto bg-teal-50 rounded-xl shadow-sm flex flex-wrap justify-between items-end gap-4 p-4 sm:p-6">
        <div className="flex flex-col flex-1 min-w-[200px]">
          <label
            htmlFor="descricao"
            className="text-sm font-medium text-gray-700 mb-1"
          >
            Descrição
          </label>
          <input
            id="descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            className="border border-gray-300 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 rounded-lg py-2 px-3 text-sm text-gray-800 outline-none transition-all"
            type="text"
            placeholder="Ex: Salário, Compra no mercado..."
          />
        </div>
        <div className="flex flex-col flex-1 min-w-[150px]">
          <label
            htmlFor="valor"
            className="text-sm font-medium text-gray-700 mb-1"
          >
            Valor
          </label>
          <input
            id="valor"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            className="border border-gray-300 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 rounded-lg py-2 px-3 text-sm text-gray-800 outline-none transition-all"
            type="number"
            placeholder="R$ 0,00"
          />
        </div>
        <fieldset className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-700">
          <legend className="sr-only">Tipo de transação</legend>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="tipo"
              id="rIncome"
              checked={!expense}
              onChange={() => setExpense(false)}
              className="text-teal-600 focus:ring-teal-500"
            />
            <span>Entrada</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="tipo"
              id="rExpense"
              checked={expense}
              onChange={() => setExpense(true)}
              className="text-rose-600 focus:ring-rose-500"
            />
            <span>Saída</span>
          </label>
        </fieldset>
        <button
          onClick={handleSave}
          className="bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white font-medium py-2 px-4 rounded-lg transition-all shadow-sm min-w-[120px]"
          type="submit"
        >
          Adicionar
        </button>
      </div>
      <TableContainer itens={transactionsList} setItens={setTransactionsList} />
    </>
  );
};

export default Form;
