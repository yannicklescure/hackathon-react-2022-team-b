import Spinner from './Spinner';
import styled from 'styled-components';

const Loading = () => {
  return (
    <SpinnerWrapper><Spinner></Spinner></SpinnerWrapper>
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