import { useState } from "react";
import styled from "styled-components";

// components
import PhoneNumberInput from "./PhoneNumberInput";
import EmailInput from "./Emailinput";
import ColorInput from "./ColorInput";
import CaptchaModal from "../components/CaptchaModal";
import AddressInputAndLabel from "./AddressInputAndLabel";
import UserInfo from "./UserInfo";
import ValidedForm from "./ValidedForm";

const TicketForm = ({ setInkPrice, setColor, setColorPrice }) => {
  const [inputs, setInputs] = useState({});
  const [isEmailShuffled, setIsEmailShuffled] = useState(false);
  const [isCaptchaValidated, setIsCaptchaValidated] = useState(false);
  const [showCaptchaModal, setShowCaptchaModal] = useState(false);
  const [showEmailField, setShowEmailField] = useState(false);
  const [isFormReadyToSubmit, setIsFormReadyToSubmit] = useState(false);

  const toggleCaptchaModal = () => {
    setShowCaptchaModal(!showCaptchaModal);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowCaptchaModal(!showCaptchaModal);
    setIsEmailShuffled(true);
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <UserInfo inputs={inputs} setInputs={setInputs} setInkPrice={setInkPrice} />
        <EmailInput isEmailShuffled={isEmailShuffled} setIsEmailShuffled={setIsEmailShuffled} />
        <PhoneNumberInput setInputs={setInputs} />
        <AddressInputAndLabel showEmailField={showEmailField} setShowEmailField={setShowEmailField} />
        <ColorInput setInputs={setInputs} setColor={setColor} setColorPrice={setColorPrice} />
        <ValidedForm /> 
      </Form>

      <CaptchaModal
        showCaptchaModal={showCaptchaModal}
        toggleCaptchaModal={toggleCaptchaModal}
        setIsCaptchaValidated={setIsCaptchaValidated}
      />
    </Wrapper>
  )
};

const Wrapper = styled.div`
  flex-basis: 70%;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export default TicketForm;
