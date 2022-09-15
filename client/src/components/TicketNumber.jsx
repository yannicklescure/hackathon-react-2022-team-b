import { useState } from "react";
import styled from "styled-components";
import { COLORS } from "../constants";

const TicketNumber = (props) => {

  const handleChange = (event) => {
    props.setNbTicket(event.target.value);
  };

  return (
    <>
      <Label>Nombre de billets : </Label>
      <Wrapper>
        <InputFieldset onChange={handleChange}>

          <InputOption>
            <input type="radio" id="nb-ticket-1" name="nb-ticket" value="1" defaultChecked />
            <InputLabel htmlFor="nb-ticket-3">1</InputLabel>
          </InputOption>

          <InputOption>
            <input type="radio" id="nb-ticket-2" name="nb-ticket" value="2" />
            <InputLabel htmlFor="nb-ticket-1">2</InputLabel>
          </InputOption>

          <InputOption>
            <input type="radio" id="nb-ticket-3" name="nb-ticket" value="3" />
            <InputLabel htmlFor="nb-ticket-2">3</InputLabel>
          </InputOption>

        </InputFieldset>
      </Wrapper>
    </>
  )
};

const Wrapper = styled.div``;
const InputFieldset = styled.fieldset`
  display: flex;
  margin-bottom: 15px;
`;
const InputOption = styled.div`
  margin-right: 15px;

  input {
    position: absolute;
    left: -9999px;

    &:checked {
      position: absolute;
      left: -9999px;
  
      + label {
        background: ${COLORS.lightGrey};
      }
    }
  }
`;
const Label = styled.label`
  padding-top:    20px;
  padding-bottom: 5px;
`;
const InputLabel = styled.label`
  display: inline-block;
  padding: 5px 10px;
  border: 1px solid ${COLORS.secondary};
  cursor: pointer;
`;

export default TicketNumber;
