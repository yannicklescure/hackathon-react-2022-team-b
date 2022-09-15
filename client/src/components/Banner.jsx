import { NavLink } from "react-router-dom";
import styled from "styled-components";
import BannerImage from "../assets/mars-home-contentfeat.jpg";
import { COLORS } from "../constants";

const Banner = ({ navbarHeight }) => {
  return (
    <Wrapper navbarHeight={navbarHeight} image={BannerImage}>
      <Container>
        <MediumText>Vers l'infini et au-delà</MediumText>
        <BigText>Espace Y Mission</BigText>
        <CtaButton to="/buy-a-ticket">EMBARQUER</CtaButton>
      </Container>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  background: url(${({image}) => image});
  /* opacity: 0.85; */
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 100vh; 
  display: flex;
  justify-content: left;
  align-items: center;
  margin-top: ${({navbarHeight}) => navbarHeight * -1 + 'px'};
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;
  color: ${COLORS.white};
  width: 50vw;
  height: 50vh;
  margin-left: 10vw;
  gap: 16px;
`;
const MediumText = styled.p`
  font-size: 24px;
`;
const BigText = styled.p`
  font-size: 48px;
`;
const CtaButton = styled(NavLink)`
  padding: 12px 24px;
  border: 2px solid ${COLORS.white};
  color: ${COLORS.white};
  text-decoration: none;
  transition: all ease 300ms;

  &:hover {
    background-color: ${COLORS.light};
    color: ${COLORS.dark};
  }
`;

export default Banner;