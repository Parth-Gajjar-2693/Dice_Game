import React from "react";
import styled from "styled-components";

const TotalScore = ({ score }) => {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default TotalScore;

const ScoreContainer = styled.div`
  max-width: 200px;
  h1 {
    font-size: 6rem;
    line-height: 100px;
  }
  p {
    font-size: 1.5rem;
    font-weight: 500;
  }
`;
