import React from "react";
import styled from "styled-components";

const NumberSelector = ({
  setError,
  error,
  selectedNumber,
  setSelecedNumber,
}) => {
  //Display selected number to user
  const arrayNumber = [1, 2, 3, 4, 5, 6];

  //click number selector
  const numberSelectorHandler = (value) => {
    setSelecedNumber(value);
    //Warning will be empty when user select any num
    setError("");
  };

  return (
    <NumberSelectorContainer>
      {/* Error msg para */}
      <p className="error">{error}</p>
      <div className="flex">
        {/* using map function display all num(1 to 6)  */}
        {arrayNumber.map((value, index) => (
          <Box
            isSelected={value == selectedNumber}
            key={index}
            onClick={() => numberSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .flex {
    display: flex;
    gap: 1.5rem;
  }
  p {
    font-size: 1.2rem;
    font-weigth: 700;
    margin-top: 1rem;
  }
  .error {
    color: red;
    font-weight: 500;
    letter-spacing: 2px;
    font-size: 1rem;
    margin-bottom: 0.2rem;
  }
`;

const Box = styled.div`
  height: 4rem;
  width: 4rem;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 1.5rem;
  font-weigth: 700;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;
