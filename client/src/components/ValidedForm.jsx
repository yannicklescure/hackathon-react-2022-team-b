import { useState } from "react";
import styled from "styled-components";
import { COLORS } from "../constants";

const ValidedForm = () => {
  const [isHover, setIsHover] = useState(false);
  const [count, setCount] = useState(0);

  const handleMouseHover = () => {
    if (isHover) {
      setIsHover(false);
    }
    else {
      if (count < 3) {
        setIsHover(true);
        setCount(count + 1);
      }
    }
    return () => {
      setCount(0);
    }
  }

  return (
    <Wrapper
      onMouseEnter={handleMouseHover}
      onMouseLeave={handleMouseHover}
      isHover={isHover}
    >
      <CancelBtn type="reset">Annuler</CancelBtn>
      <ValidBtn type="submit">Acheter</ValidBtn>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  width: ${({isHover}) => isHover ? '75%' : 'inherit'};
`;
const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  padding: 12px 24px;
  cursor: pointer;
  color: ${COLORS.light};
`;
const CancelBtn = styled(StyledButton)`
  background-color: ${COLORS.danger};
`;
const ValidBtn = styled(StyledButton)`
  background-color: ${COLORS.success};
`;

export default ValidedForm;