import styled from "styled-components";

const StyledMessage = styled.div`
  width: 100%;
  padding: 1em;
  border: 1px solid #000;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 2em;
  border-radius: 5px;

  &.success {
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
  }

  &.error {
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
  }
`;

interface MessageProps {
  type: "success" | "error";
  children: React.ReactNode;
}

const Message: React.FC<MessageProps> = ({ type, children }) => {
  return <StyledMessage className={type}>{children}</StyledMessage>;
};

export default Message;
