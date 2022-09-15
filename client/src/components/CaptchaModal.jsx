import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

// components
import CaptchaColorTile from './CaptchaColorTile';

const CaptchaModal = ({ showCaptchaModal, setIsCaptchaValidated, toggleCaptchaModal }) => {
  const validateCaptcha = () => {
    // I trust the user, this captcha is filled properly
    setIsCaptchaValidated(true);
    toggleCaptchaModal();
  };
  
  return (
    <Wrapper showCaptchaModal={showCaptchaModal}>
      <Container>
        <h1>Veuillez sélectionner les bonnes couleurs</h1>
        <ImageGrid>
          {Array(9).fill().map(() => <CaptchaColorTile key={uuidv4()} />)}
        </ImageGrid>
        <Button onClick={validateCaptcha}>Valider</Button>
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
  display: ${({showCaptchaModal}) => showCaptchaModal ? "flex" : "none"};
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  width: 500px;
  height: 500px;
  padding: 15px;
  background-color: #FFF;
  display: flex;
  flex-direction: column;
`;
const ImageGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  flex-grow: 1;
`;
const Button = styled.button `
  background-color: #126ffc;
  border: 2px solid #126ffc;
  text-decoration: none;
  border-radius: 4px;
  color: #f8fafb;
  padding: 4px 4px;
  margin: 5px;
  cursor: pointer;
  &:hover {
    background-color: #3e85f1;
    border-color: #3e85f1;
  }
`;

export default CaptchaModal;
