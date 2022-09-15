import useInterval from '../hooks/useInterval';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import {COLORS} from "../constants";

const FalseTimer = () => {
    const [counter, setCounter] = useState(79);

    useEffect(() => {
        setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter]);

  return (
    <Wrapper>
      <Warning>{ counter }</Warning> secondes restantes
    </Wrapper>
  )
}

const Wrapper = styled.div`
    text-align: center;
`;

const Warning = styled.span`
    color: ${COLORS.danger};
    font-weight: bold;
`;

export default FalseTimer;

