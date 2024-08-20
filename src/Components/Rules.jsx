import styled from "styled-components";

const Rules = () => {
  return (
    <div>
      <RulesContainer>
        <h2>How to play game</h2>
        <div className="text">
          <ol>
            <li>Select any number</li>
            <li>
              after click on dice if selected number is equal to dice number you
              will get same point as dice
            </li>
            <li>if you get wrong guess then 1 point will be dedcuted</li>
          </ol>
        </div>
      </RulesContainer>
    </div>
  );
};

export default Rules;

const RulesContainer = styled.div`
  padding: 1.2rem;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 1rem;
  border-radius: 10px;
  border: 1px solid black;
  &:hover {
    background-color: #fbf1f1;
    transition: 0.3s background ease-in-out;
    border: 1px solid black;
    color: black;
  }
  h2 {
    font-size: 1.5rem;
  }
  .text {
    margin-top: 1rem;
  }
  .text ol li {
    line-height: 1.5rem;
  }
`;
