import { useState } from "react";
import styled from "styled-components";

// components
import PhoneNumberInput from "./PhoneNumberInput";
import EmailInput from "./Emailinput";

const TicketForm = () => {
  const [inputs, setInputs] = useState({});
  const [isEmailShuffled, setIsEmailShuffled] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  };

  const handleSubmit = (event) => {
    setIsEmailShuffled(true);
    event.preventDefault();
    console.log(inputs);
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="firstName">Prénom : </Label>
        <input
          type="text" 
          name="firstName" 
          id="firstName"
          value={inputs.firstName || ""} 
          onChange={handleChange}
        />

        <Label htmlFor="lastName">Nom de famille : </Label>
        <InversedInput
          type="text" 
          name="lastName"
          id="lastName"
          value={inputs.lastName || ""} 
          onChange={handleChange}
        />

        <Label>Courriel : </Label>
        <EmailInput isEmailShuffled={isEmailShuffled} setIsEmailShuffled={setIsEmailShuffled}></EmailInput>

        <Label>Numéro de Téléphone : </Label>
        <PhoneNumberInput setInputs={setInputs}></PhoneNumberInput>

        <br/> {/* delete me */}
        <button type="submit">Soumettre</button>
        <button type="reset">Réinitialiser</button>
      </Form>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  flex-basis: 70%;
`;

const Label = styled.label`
  padding-top:    20px;
  padding-bottom: 3px;
`;

const InversedInput = styled.input `
  transform: rotate(180deg);
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export default TicketForm;
