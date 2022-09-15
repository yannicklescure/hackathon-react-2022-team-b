import { useState, useEffect } from "react";
import useInterval from "../hooks/useInterval";
import styled from "styled-components";

const Emailinput = ({ isEmailShuffled, setIsEmailShuffled }) => {
  let [emailValue, setEmailValue] = useState(null);

  useEffect(() => {
    if(isEmailShuffled) {
      shuffleInput(emailValue);
    }
  });

  const shuffleInput = (emailValue) => {
    if(emailValue) {
      /*
      const splitedEmail = emailValue.split('@');
      let emailPrefix = emailValue.split('@')[0];
      emailPrefix = emailPrefix.sort( () => .5 - Math.random() );
      console.log(emailPrefix);*/
    }
    setIsEmailShuffled(false);
  };

  const handleChange = (event) => {
    setEmailValue(event.target.value);
  };

  return (
    <Wrapper>
      <input type={"email"} onChange={handleChange}/>
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
