import styled from "styled-components";

export const Button = styled.button`
  background-color: black;
  color: white;
  padding: 15px 18px;
  min-width: 220px;
  border-radius: 10px;
  border: none;
  font-size: 1rem;
  border: 1px solid transparent;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.3s background ease-in-out;
    cursor: pointer;
  }
`;

export const OutlineButton = styled(Button)`
  background-color: white;
  color: black;
  border: 1px solid black;
  &:hover {
    background-color: black;
    color: white;
    border: 1px solid transparent;
  }
`;
