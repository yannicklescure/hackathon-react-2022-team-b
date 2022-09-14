import { useState } from 'react';
import styled from 'styled-components';

const TicketForm = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
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
