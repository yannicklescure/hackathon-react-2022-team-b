import { useState, useEffect } from "react";
import useInterval from "../hooks/useInterval";
import styled from "styled-components";

const AddressInputAndLabel = ({ showEmailField, setShowEmailField }) => {
  const [isMailActive, setIsMailActive] = useState(false);

  useEffect(() => {
    if(showEmailField && !isMailActive) {
      document.getElementById("emailField").style = "display: block;";
      setIsMailActive(true);
    }
  });

  return (
    <Wrapper id={"emailField"}>
      <Label>Adresse: </Label>
      <input type={"text"}/>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  display: none;
`;

const Label = styled.label `
    display:block;
    padding-top:    20px;
    padding-bottom: 3px;
`;

export default AddressInputAndLabel;
