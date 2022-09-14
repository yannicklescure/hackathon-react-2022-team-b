import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../constants";
import logo from "../assets/space-y.png";

const Navbar = () => {
  return (
    <Wrapper>
        <StyledNavLink to="/"><Logo src={logo} /></StyledNavLink>
        <StyledNavLink to="/">Accueil</StyledNavLink>
        <StyledNavLink to="/buy-a-ticket">Acheter un billet</StyledNavLink>
        <StyledNavLink to="/launch-history">Historique de lancement</StyledNavLink>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  padding: 16px;
  background-color: ${COLORS.dark};
  color: ${COLORS.light};
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 16px;
  margin-bottom: 16px;
`;
const StyledNavLink = styled(NavLink)`
  color: ${COLORS.light};
  text-decoration: none;
`;
const Logo = styled.img`
  position: absolute;
  bottom: 16px;
  left: 16px;
  height: 25px;
`;

export default Navbar;