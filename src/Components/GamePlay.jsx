import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RollDice from "./RollDice";
import { Button, OutlineButton } from "../Styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  //All useState Hook declare here
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelecedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  //Generate a random number between 1 to 6
  const generateRandomNumber = (_min, _max) => {
    // return Math.floor(Math.random * (max - min) + min);
    return Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6
  };

  const roleDice = () => {
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    //Display error msg if you have not selected any number
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }

    //If number will match , there is 2 use case
    // 1 - select num and random num is match then score is equal to dice number you
    // 2 - if num is not match then score is reduce to -1
    if (selectedNumber == randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 1);
    }

    setSelecedNumber(undefined);
  };

  //funtion will reset 0 score on display
  const resetScore = () => {
    setScore(0);
  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelecedNumber={setSelecedNumber}
        />
      </div>
      <RollDice currentDice={currentDice} roleDice={roleDice} />
      <div className="btns">
        {/* display rules msg if the user click on show rule button and hide rules when user click on Hide rule button */}
        <OutlineButton onClick={resetScore}>Reset </OutlineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {/* Use ternary operator to display Hide ans show button */}
          {showRules ? "Hide" : "Show"} Rules
        </Button>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  padding: 4rem;

  .top_section {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
  .btns {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    margin-top: 1.3rem;
  }
`;
