import styled from 'styled-components';
import { COLORS } from "../constants";

const CaptchaModal = (props) => {
  const validateCaptcha = () => {
    // I trust the user, this captcha is filled properly
    props.setIsCaptchaValidated(true);
    props.toggleCaptchaModal();
  };

  const randomColor = () => {
    return `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`
  };
  
  return (
    <Wrapper showCaptchaModal={props.showCaptchaModal}>
      <Container>
        <h1>Veuillez sélectionner les bonnes couleurs</h1>

        <ImageGrid>
          <ImageTile color={randomColor()}></ImageTile>
          <ImageTile color={randomColor()}></ImageTile>
          <ImageTile color={randomColor()}></ImageTile>

          <ImageTile color={randomColor()}></ImageTile>
          <ImageTile color={randomColor()}></ImageTile>
          <ImageTile color={randomColor()}></ImageTile>

          <ImageTile color={randomColor()}></ImageTile>
          <ImageTile color={randomColor()}></ImageTile>
          <ImageTile color={randomColor()}></ImageTile>
        </ImageGrid>

        <button onClick={validateCaptcha}>Valider</button>
      </Container>
    </Wrapper>
  )

};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9001;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${props => props.showCaptchaModal ? "flex" : "none"};
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 500px;
  height: 500px;
  padding: 5px;
  background-color: #FFF;
  display: flex;
  flex-direction: column;
`;

const ImageGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  flex-grow: 1;
`

const ImageTile = styled.button`
  background-color: ${props => props.color};
  height: 30%;
  width: 30%;
  margin: 5px;
`;

export default CaptchaModal;