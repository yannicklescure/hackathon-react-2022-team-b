import styled from "styled-components";

const UserInfo = ({ inputs, setInputs, setInkPrice }) => {

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))

    // calculate the price of printing the name on the ticket
    const fullNameLength = (inputs.firstName?.length || 0) + (inputs.lastName?.length || 0);
    setInkPrice(fullNameLength * 142);
  };

  return (
    <>
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
    </>
  )
};

const InversedInput = styled.input `
  transform: rotate(180deg);
`;
const Label = styled.label`
  padding-top:    20px;
  padding-bottom: 3px;
`;

export default UserInfo;