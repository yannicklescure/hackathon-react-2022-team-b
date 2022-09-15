import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../constants";
import logo from "../assets/space-y.png";
import { useRef } from "react";
import { useEffect } from "react";

const Navbar = ({ setNavbarHeight }) => {
  const ref = useRef(null);

  useEffect(() => {
    setNavbarHeight(ref.current.clientHeight);
  }, [])

  return (
    <Wrapper ref={ref}>
      <StyledNavLink to="/">
        <Logo src={logo} />
      </StyledNavLink>
      <Container>
        <StyledNavLink to="/buy-a-ticket">Acheter un billet</StyledNavLink>
        <StyledNavLink to="/launch-history">Historique de lancement</StyledNavLink>
      </Container>
    </Wrapper>
  )
}

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 16px;
`;
const Wrapper = styled(Main)`
  padding: 16px;
  background-color: ${COLORS.dark};
  color: ${COLORS.light};
  justify-content: space-between;
`;
const Container = styled(Main)``;
const StyledNavLink = styled(NavLink)`
  color: ${COLORS.light};
  text-decoration: none;
`;
const Logo = styled.img`
  height: 25px;
`;

export default Navbar;