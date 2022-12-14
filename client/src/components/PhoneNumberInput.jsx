import { useState } from "react";
import useInterval from "../hooks/useInterval";
import styled from "styled-components";
import { COLORS } from "../constants";

const PhoneNumberInput = (props) => {
  const [count, setCount] = useState(0);
  const [currentDigit, setCurrentDigit] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [delay, setDelay] = useState(500);

  useInterval(() => {
    const newCount = count < 9 ? count + 1 : 0
    setCount(newCount);
  }, delay);

  const pickDigit = (event) => {
    event.preventDefault();

    if (currentDigit < 10) {
      setCurrentDigit(currentDigit + 1);

      const newPhoneNumber = phoneNumber + count.toString();
      setPhoneNumber(newPhoneNumber);
      // set phone number in parent inputs state
      props.setInputs(values => ({...values, phoneNumber: newPhoneNumber}));

      setDelay(Math.max(100, delay - 50));
    };

  };

  const resetAllDigits = (event) => {
    event.preventDefault();

    setPhoneNumber("");
    // set phone number in parent inputs state
    props.setInputs(values => ({...values, phoneNumber: ""}));
    setCurrentDigit(0);
    setDelay(500)
  };

  const countForPosition = (position) => {
    return phoneNumber[position] || (currentDigit === position ? count : "")
  };

  return (
    <>
      <Label>Numéro de Téléphone : </Label>
      <Wrapper>
      <DigitsContainer>
        <SingleDigit>{countForPosition(0)}</SingleDigit>
        <SingleDigit>{countForPosition(1)}</SingleDigit>
        <SingleDigit>{countForPosition(2)}</SingleDigit>
        <DigitDivider>—</DigitDivider>
        <SingleDigit>{countForPosition(3)}</SingleDigit>
        <SingleDigit>{countForPosition(4)}</SingleDigit>
        <SingleDigit>{countForPosition(5)}</SingleDigit>
        <DigitDivider>—</DigitDivider>
        <SingleDigit>{countForPosition(6)}</SingleDigit>
        <SingleDigit>{countForPosition(7)}</SingleDigit>
        <SingleDigit>{countForPosition(8)}</SingleDigit>
        <SingleDigit>{countForPosition(9)}</SingleDigit>
      </DigitsContainer>

      <Button onClick={pickDigit}>Sélectionner</Button>
      <Button onClick={resetAllDigits}>Réinitialiser</Button>
    </Wrapper>
    </>
  )
};

const Wrapper = styled.div``;

const DigitsContainer = styled.div`
  display: flex;
  margin: 5px 0;
`;
const Label = styled.label`
  padding-top:    20px;
  padding-bottom: 3px;
`;
const DigitDivider = styled.div`
  margin-right: 10px;
  padding: 3px 0;
`;
const SingleDigit = styled.div`
  padding: 3px 0;
  margin-right: 10px;
  border: 1px solid ${COLORS.secondary};
  border-radius: 4px;
  min-width: 1.5em;
  text-align: center;
`;

const Button = styled.button `
  background-color: #126ffc;
  border: 2px solid #126ffc;
  text-decoration: none;
  border-radius: 4px;
  color: #f8fafb;
  padding: 4px 4px;
  margin-right: 10px;
  cursor: pointer;
  &:hover {
    background-color: #3e85f1;
    border-color: #3e85f1;
  }
`

export default PhoneNumberInput;
