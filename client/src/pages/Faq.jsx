import styled from "styled-components";
import { COLORS } from "../constants";

const Faq = () => {
  return (
    <StyledH1>FAQ</StyledH1>
  )
};

const StyledH1 = styled.h1`
  color: ${COLORS.primary};
`;

export default Faq;