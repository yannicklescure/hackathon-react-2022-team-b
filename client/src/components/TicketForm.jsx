import { useState } from 'react';
import styled from 'styled-components';

// components
import PhoneNumberInput from './PhoneNumberInput';

const TicketForm = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">Prénom : </label>
        <input 
          type="text" 
          name="firstName" 
          id="firstName"
          value={inputs.firstName || ""} 
          onChange={handleChange}
        />

        <label htmlFor="lastName">Nom de famille : </label>
        <input 
          type="text" 
          name="lastName"
          id="lastName"
          value={inputs.lastName || ""} 
          onChange={handleChange}
        />

        <PhoneNumberInput setInputs={setInputs}></PhoneNumberInput>

        <br/> {/* delete me */}
        <button type="submit">Soumettre</button>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  flex-basis: 66%;
`;

export default TicketForm;
