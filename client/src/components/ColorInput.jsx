import { useState, useEffect } from "react";
import useInterval from "../hooks/useInterval";
import styled from "styled-components";
import { COLORS } from "../constants";

const ColorInput = (props) => {
  const [colorSwitchCount, setColorSwitchCount] = useState(0);

  const handleChange = (event) => {
    props.setColor(event.target.value);
    // set color in parent inputs state
    props.setInputs(values => ({...values, color: event.target.value}));

    setColorSwitchCount(colorSwitchCount + 1);

    // don't hate the math, the science checked out
    const price = event.target.value === "white" ? 0 : (event.target.value.length * (colorSwitchCount + 1) * 42);
    props.setColorPrice(price);
  };

  return (
    <Wrapper>
      <ColorFieldset onChange={handleChange}>
        <ColorOption color={COLORS.white} isHidden={colorSwitchCount > 0}>
          <input type="radio" id="white" name="color" value="white" defaultChecked />
        </ColorOption>

        <ColorOption color={COLORS.purple} isHidden={colorSwitchCount === 0}>
          <input type="radio" id="purple" name="color" value="purple" />
        </ColorOption>

        <ColorOption color={COLORS.red}>
          <input type="radio" id="red" name="color" value="red" />
        </ColorOption>

        <ColorOption color={COLORS.blue}>
          <input type="radio" id="blue" name="color" value="blue" />
        </ColorOption>

        <ColorOption color={COLORS.yellow}>
          <input type="radio" id="yellow" name="color" value="yellow" />
        </ColorOption>

        <ColorOption color={COLORS.orange}>
          <input type="radio" id="orange" name="color" value="orange" />
        </ColorOption>
      </ColorFieldset>
    </Wrapper>
  )
};

const Wrapper = styled.div``;

const ColorFieldset = styled.fieldset`
  display: flex;
  border: 1px solid ${COLORS.secondary};
  border-radius: 4px;
`;

const ColorOption = styled.div`
  background-color: ${props => props.color};
  padding: 5px 15px;
  display: ${props => props.isHidden ? "none" : "block"};
`;

export default ColorInput;
