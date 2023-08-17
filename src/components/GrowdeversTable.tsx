import React from "react";
import { styled } from "styled-components";
import Growdever from "../Types/GrowdeverType";
import Message from "./Message";

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const StyledTh = styled.th`
  background-color: #f2f2f2;
  border: 1px solid #ddd;
  padding: 8px 12px;
`;

const StyledTd = styled.td`
  border: 1px solid #ddd;
  padding: 8px 12px;
`;

const StyledTr = styled.tr`
  &:hover {
    background-color: #f5f5f5;
  }
`;

interface GrowdeverTableProps {
  growdevers: Growdever[];
  deletar: (id: string) => void;
  editar: (id: string) => void;
  editMode?: boolean;
}

function GrowdeverTable({
  growdevers,
  deletar,
  editar,
  editMode,
}: GrowdeverTableProps) {
  const emptyGrowdevers = growdevers.filter(
    (growdever) => !growdever.nome || growdever.nome.trim() === ""
  );

  return (
    <>
      {emptyGrowdevers.length > 0 && (
        <Message type="error">
          {emptyGrowdevers.length === 1
            ? "1 registro possui nome vazio e foi excluído."
            : `${emptyGrowdevers.length} registros possuem nomes vazios e foram excluídos.`}
        </Message>
      )}
      <StyledTable>
        <thead>
          <StyledTr>
            <StyledTh>Nome</StyledTh>
            <StyledTh>Idade</StyledTh>
            <StyledTh>Actions</StyledTh>
          </StyledTr>
        </thead>
        <tbody>
          {growdevers.map((growdever, index) => {
            if (!growdever.nome || growdever.nome.trim() === "") {
              return null;
            }

            return (
              <StyledTr key={index}>
                <StyledTd>{growdever.nome}</StyledTd>
                <StyledTd>
                  {growdever.idade !== undefined
                    ? growdever.idade
                    : "Não informado"}
                </StyledTd>
                <StyledTd>
                  <button
                    onClick={() => deletar(growdever.id)}
                    disabled={editMode}
                  >
                    Excluir
                  </button>
                  <button onClick={() => editar(growdever.id)}>Editar</button>
                </StyledTd>
              </StyledTr>
            );
          })}
        </tbody>
      </StyledTable>
      {emptyGrowdevers.length === 0 && (
        <Message type="success">
          Nenhum registro com nome vazio encontrado.
        </Message>
      )}
    </>
  );
}

export default GrowdeverTable;
