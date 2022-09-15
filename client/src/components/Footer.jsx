import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../constants";

const Footer = () => {
  return (
    <Wrapper>
      <Copyright>© 2052, Espace Y. Tous droits réservés</Copyright>
      <StyledNavLink to="/faq">FAQ</StyledNavLink>
      <StyledNavLink to="/about-us">À propos</StyledNavLink>
      <StyledNavLink to="/formulaire-de-plaite">Formuler une plainte</StyledNavLink>
      <StyledNavLink to="/politique-de-confidentialite">Politique de confidentialité</StyledNavLink>
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
  margin: 0;
`;
const StyledNavLink = styled(NavLink)`
  color: ${COLORS.light};
  text-decoration: none;
`;
const Copyright = styled.div`
  color: ${COLORS.secondary}
`;

export default Footer;