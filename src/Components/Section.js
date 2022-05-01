import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section(props) {
  const handleButton = () => {
    window.scroll({
      top: 650,
      behavior: "smooth",
    });
  };

  return (
    <Wrap bgImg={props.bgimg}>
      <Fade bottom>
        <ItemText>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            {props.leftbuttontext && (
              <LeftButton> {props.leftbuttontext}</LeftButton>
            )}
            {props.rightbuttontext ? (
              <RightButton> {props.rightbuttontext}</RightButton>
            ) : (
              ""
            )}
          </ButtonGroup>
        </Fade>
        <DownArrow onClick={handleButton} src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  backgroud-repeat: no-repeat;
  background-image: ${(props) => `url("/images/${props.bgImg}")`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const ItemText = styled.div`
  font-weight: 600;
  padding-top: 15vh;
  text-align: center;
`;
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 250px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  color: black;
  opacity: 0.65;
`;
const DownArrow = styled.img`
  overflow-x: hidden;
  height: 40px;
  animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div``;

export default Section;
