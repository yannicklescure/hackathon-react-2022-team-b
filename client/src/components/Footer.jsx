import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../constants";

const Footer = () => {
  return (
    <Wrapper>
        <Copyright>© 2052, Espace Y. Tous droits réservés</Copyright>
        <StyledNavLink to="/faq">FAQ</StyledNavLink>
        <StyledNavLink to="/privacy-policy">Politique de confidentialité</StyledNavLink>
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
const Copyright = styled.div`
    color: ${COLORS.secondary}
`;

export default Footer;