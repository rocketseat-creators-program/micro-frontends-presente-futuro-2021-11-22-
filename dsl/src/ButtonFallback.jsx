import React, { useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: Blue;
  color: white;
  color: white;
  font-size: 2em;
  width: 100%;
  padding: 18px 20px;
  border-radius: 4px;
  &:hover {
    opacity: 0.8;
  }
`;

const ButtonFallback = () => {
  const [counter, setCounter] = useState(0);
  return (
    <StyledButton onClick={() => setCounter(counter + 1)}>
      Create Account {counter}
    </StyledButton>
  );
};

export default ButtonFallback;
