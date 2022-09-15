import styled from 'styled-components';
import { useEffect, useState } from 'react';
import {COLORS} from "../constants";

const FalseTimer = () => {
  const [counter, setCounter] = useState(79);
  const [isTrue, setIsTrue] = useState(false);

  useEffect(() => {
    setIsTrue(true);
  }, []);

  useEffect(() => {
    setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  useEffect(() => {
    setTimeout(() => setIsTrue(!isTrue), 300);
  }, [isTrue]);

  return (
    <Wrapper isTrue={isTrue}>
      <Warning>{ counter }</Warning>
      <span>secondes restantes</span>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background-color: ${({isTrue}) => isTrue ? COLORS.red : COLORS.yellow};
  border: 1px solid ${COLORS.black};
  gap: 4px;
`;

const Warning = styled.span`
  font-weight: bold;
`;

export default FalseTimer;

