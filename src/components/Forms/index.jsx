import React, { useState } from "react";

const Form = () => {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [expense, setExpense] = useState(false);

  const handleSave = () => {
    if (!descricao || !valor) {
      alert("Informe a descrição e o valor!");
    } else if (valor < 1) {
      alert("O Valor precisa ser positivo!");
      return;
    }
  };
  return (
    <div className="w-[98%] bg-amber-100 rounded-[5px] flex justify-around py-4 px-0 gap-2.5">
      <div className="flex flex-col">
        <label>Descrição</label>
        <input
          value={descricao}
          onchange={(e) => setDescricao(e.target.value)}
          className="outline-none rounded-[5px] py-1.5 px-2.5 text-[15px]  "
          type="text"
        />
      </div>
      <div className="flex flex-col">
        <label>Valor</label>
        <input
          value={valor}
          onchange={(e) => setValor(e.target.value)}
          className="outline-none rounded-[5px] py-1.5 px-2.5 text-[15px] "
          type="number"
        />
      </div>
      <div className="flex items-center">
        <div className="mx-2.5">
          <input type="radio" name="group1" id="rIncome" defaultChecked />
          <label htmlFor="rIncome">Entrada</label>
        </div>
        <div>
          <input type="radio" name="group1" id="rIncome" />
          <label htmlFor="rIncome">Saída</label>
        </div>
      </div>

      <button
        onClick={handleSave}
        className="py-1.5 px-2.5 rounded-[5px] cursor-pointer text-amber-50 bg-teal-600"
        type="submit"
      >
        Adicionar
      </button>
    </div>
  );
};

export default Form;
