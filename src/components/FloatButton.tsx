import React from "react";
import { styled } from "styled-components";

interface FloatButtonProps {
  action: () => void;
}

const ButtonStyled = styled.button`
  border-radius: 100%;
  width: 40px;
  height: 40px;
  background-color: green;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  position: absolute;
  bottom: 50px;
  right: 50px;
`;

const FloatButton: React.FC<FloatButtonProps> = ({ action }) => {
  return (
    <ButtonStyled onClick={action}>
      <i className="bi bi-plus"></i>
    </ButtonStyled>
  );
};

export default FloatButton;
