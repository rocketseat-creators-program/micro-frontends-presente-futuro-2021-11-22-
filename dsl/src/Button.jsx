import React, { useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: palevioletred;
  color: white;
  font-size: 2em;
  width: 100%;
  padding: 18px 20px;
  border-radius: 4px;
  &:hover {
    opacity: 0.8;
  }
`;

const Button = () => {
  const [counter, setCounter] = useState(0);

  if (counter === 5) {
    throw new Error("Count is 5. Error Occurred.");
  }
  return (
    <StyledButton onClick={() => setCounter(counter + 1)}>
      Create Account {counter}
    </StyledButton>
  );
};

export default Button;
