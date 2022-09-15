import { useState } from "react";
import useInterval from "../hooks/useInterval";
import styled from "styled-components";

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
      props.setInputs(values => ({...values, ["phoneNumber"]: newPhoneNumber}));

      setDelay(Math.max(100, delay - 50));
    };

  };

  const resetAllDigits = (event) => {
    event.preventDefault();

    setPhoneNumber("");
    // set phone number in parent inputs state
    props.setInputs(values => ({...values, ["phoneNumber"]: ""}));
    setCurrentDigit(0);
    setDelay(500)
  };

  const countForPosition = (position) => {
    return phoneNumber[position] || (currentDigit === position ? count : "")
  };

  return (
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

      <button onClick={pickDigit}>Sélectionner</button>
      <button onClick={resetAllDigits}>Réinitialiser</button>
    </Wrapper>
  )
};

const Wrapper = styled.div``;

const DigitsContainer = styled.div`
  display: flex;
  margin: 5px 0;
`;

const DigitDivider = styled.div`
  margin-right: 10px;
  padding: 3px 0;;
`;

const SingleDigit = styled.div`
  padding: 3px 0;
  margin-right: 10px;
  border: 1px solid black;
  border-radius: 4px;
  min-width: 1.5em;
  text-align: center;
`;

export default PhoneNumberInput;
