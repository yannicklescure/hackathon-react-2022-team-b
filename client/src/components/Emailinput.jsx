import { useState, useEffect } from "react";
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
    <>
      <Label>Courriel : </Label>
      <Wrapper>
        <input id={"emailInputId"} type={"email"} onChange={handleChange}/>
      </Wrapper>
    </>
  )
};

const Wrapper = styled.div``;
const Label = styled.label`
  padding-top:    20px;
  padding-bottom: 3px;
`;

export default Emailinput;
