import React from "react";
import styled from "styled-components";

const RollDice = ({ roleDice, currentDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        {/* display dynamic image using currentDice props/states(path) */}
        <img src={`/images/dice/dice_${currentDice}.png`} alt="dice" />
      </div>
      <p>Click On Dice To Roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2.5rem;

  p {
    font-size: 1.2rem;
  }

  .dice {
    cursor: pointer;
  }
`;
