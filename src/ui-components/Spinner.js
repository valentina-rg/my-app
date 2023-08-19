import React from "react";
import styled, { keyframes } from "styled-components";

const Spinner = ({ classes, styleType, description, alignItems = "center" }) => {
  let bg = "#fff";

  if (styleType === "white") {
    bg = "#bbb";
  }
  if (styleType === "loader") {
    bg = "#00475C";
  }
  return (
    <>
      <Wrapper className={classes} alignItems={alignItems}>
        <div className="flex flex-col items-center">
          {description ? <h1 className="font-bold mb-8">{description}</h1> : null}
          <Box>
            <Child bg={bg} />
            <Child bg={bg} />
            <Child bg={bg} />
            <Child bg={bg} />
            <Child bg={bg} />
            <Child bg={bg} />
          </Box>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: ${props => props.alignItems};
  z-index: 1;
  position: absolute;
`;

const bounce = keyframes`
  100% { transform: rotate(360deg) } 
`;
const bounce2 = keyframes`
  80% { transform: rotate(360deg) }
  100% { transform: rotate(360deg) }
`;
const bounce3 = keyframes`
  0% {
    transform: scale(1.0); 
  } 
  50% {
    transform: scale(0.4); 
  } 
  100% {
    transform: scale(1.0); 
  }
`;

const Box = styled.div`
  width: 20px;
  height: 20px;
  position: relative;
  animation: ${bounce} 2s infinite linear both;
`;

const Child = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  animation: ${bounce2} 1.5s infinite ease-in-out both;

  &:before {
    content: "";
    display: block;
    width: 25%;
    height: 25%;
    background-color: ${(props) => props.bg};
    border-radius: 100%;
    animation: ${bounce3} 1.5s infinite ease-in-out both;
  }

  &:nth-child(1) {
    animation-delay: -1.1s;
  }
  &:nth-child(2) {
    animation-delay: -1s;
  }
  &:nth-child(3) {
    animation-delay: -0.9s;
  }
  &:nth-child(4) {
    animation-delay: -0.8s;
  }
  &:nth-child(5) {
    animation-delay: -0.7s;
  }
  &:nth-child(6) {
    animation-delay: -0.6s;
  }
  &:nth-child(1):before {
    animation-delay: -1.1s;
  }
  &:nth-child(2):before {
    animation-delay: -1s;
  }
  &:nth-child(3):before {
    animation-delay: -0.9s;
  }
  &:nth-child(4):before {
    animation-delay: -0.8s;
  }
  &:nth-child(5):before {
    animation-delay: -0.7s;
  }
  &:nth-child(6):before {
    animation-delay: -0.6s;
  }
`;

export default Spinner;
