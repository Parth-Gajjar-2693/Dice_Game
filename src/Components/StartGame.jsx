import React from "react";
import styled from "styled-components";
import { Button } from "../Styled/Button";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="./images/hero-img.png" alt="" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        {/* Display second page on click of play now button */}
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 64rem;
  height: calc(100vh - 72px);
  display: flex;
  margin: 0 auto;
  margin-top: 50px;
  align-items: center;
  text-align: right;

  .content {
    h1 {
      font-size: 5rem;
      white-space: nowrap;
    }
  }
`;
