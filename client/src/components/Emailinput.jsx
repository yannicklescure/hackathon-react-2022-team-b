import { useState, useEffect } from "react";
import useInterval from "../hooks/useInterval";
import styled from "styled-components";

const Emailinput = ({ isEmailShuffled, setIsEmailShuffled }) => {
  let [emailValue, setEmailValue] = useState(null);
  const maxShuffle = 3;
  let [shuffledCounter, setShuffledCounter] = useState(0);

  useEffect(() => {
    if(isEmailShuffled) {
      shuffleInput();
    }
  });

  const shuffleInput = () => {
    if(emailValue && shuffledCounter < maxShuffle) {
      console.log("a");
      const splitedEmail = emailValue.split('@');
      let oldEmailPrefix = splitedEmail[0];
      let newEmailPrefix = "";
      do {
        newEmailPrefix = (String([...oldEmailPrefix].sort( () => .5 - Math.random() ))).replaceAll(',','');
      } while (oldEmailPrefix === newEmailPrefix)
      let newEmail = newEmailPrefix+"@"+splitedEmail[1];
      document.getElementById("emailInputId").value = newEmail;

      setShuffledCounter(shuffledCounter + 1);
    }
    setIsEmailShuffled(false);
  };

  const handleChange = (event) => {
    setEmailValue(event.target.value);
  };

  return (
    <Wrapper>
      <input id={"emailInputId"} type={"email"} onChange={handleChange}/>
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

export default Emailinput;
