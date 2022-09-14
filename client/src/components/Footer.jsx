import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../constants";

const Footer = () => {
  return (
    <Wrapper>
      <StyledNavLink to="/">Accueil</StyledNavLink>
      <StyledNavLink to="/buy-a-ticket">Buy a Ticket</StyledNavLink>
      <StyledNavLink to="/launch-history">Launch History</StyledNavLink>
      <StyledNavLink to="/faq">FAQ</StyledNavLink>
      <StyledNavLink to="/privacy-policy">Privacy Policy</StyledNavLink>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 16px;
  background-color: ${COLORS.dark};
  color: ${COLORS.light};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;
const StyledNavLink = styled(NavLink)`
  color: ${COLORS.light};
  text-decoration: none;
`;

export default Footer;