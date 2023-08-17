import { useState } from "react";
import GrowdeverTable from "../components/GrowdeversTable";
import { v4 as uuid } from "uuid";
import Growdever from "../Types/GrowdeverType";
import FloatButton from "../components/FloatButton";

function Home() {
  const [growdevers, setGrowdevers] = useState<Growdever[]>([]);
  const [nome, setNome] = useState<string>("");
  const [idade, setIdade] = useState<string>("");
  const [editMode, setEditMode] = useState<string>("");
  const [showInputs, setShowInputs] = useState<boolean>(false);

  function clearStates() {
    setNome("");
    setIdade("");
    setEditMode("");
    setShowInputs(false);
  }

  function cadastrar() {
    const newGrowdever = { nome, idade: Number(idade), id: uuid() };
    setGrowdevers([...growdevers, newGrowdever]);
    clearStates();
  }

  function deletar(id: string) {
    const atualiza = growdevers.filter((g) => g.id !== id);
    setGrowdevers(atualiza);
    clearStates();
  }

  function editar(id: string) {
    const user = growdevers.find((g) => g.id === id);
    setShowInputs(true);

    if (user) {
      setNome(user.nome);
      setIdade(`${user.idade}`);
      setEditMode(id);
    }
  }

  function handleClickButton() {
    if (!editMode) {
      cadastrar();
    } else {
      //CLONAR O STATE PARA UM NOVO ARRAY - PARA REALIZAR QUALQUER MANIPULACAO
      const newGrowdevers = [...growdevers];

      const growdeverEdit = newGrowdevers.find((g) => g.id === editMode);

      if (growdeverEdit) {
        growdeverEdit.idade = Number(idade);
        growdeverEdit.nome = nome;
      }

      setGrowdevers(newGrowdevers);

      clearStates();
    }
  }

  function changeShowInputs() {
    setShowInputs(!showInputs);
  }

  return (
    <>
      {showInputs && (
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            name="nome"
            placeholder="Nome"
            onChange={(e) => setNome(e.target.value)}
            type="text"
            value={nome}
          />
          <label htmlFor="idade">Idade:</label>
          <input
            name="idade"
            type="text"
            placeholder="Idade"
            onChange={(e) => setIdade(e.target.value)}
            value={idade}
          />
          <button onClick={handleClickButton}>
            {editMode ? "Salvar" : "Cadastrar"}
          </button>
        </div>
      )}

      <GrowdeverTable
        editar={editar}
        deletar={deletar}
        growdevers={growdevers}
        editMode={editMode ? true : false}
      />
      <FloatButton action={changeShowInputs} />
    </>
  );
}

export default Home;
