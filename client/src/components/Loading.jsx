import Spinner from './Spinner';
import styled from 'styled-components';
import { useEffect } from 'react';

const Loading = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
  return (
    <SpinnerWrapper><Spinner /></SpinnerWrapper>
  )
}

const SpinnerWrapper = styled.div `
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Loading;