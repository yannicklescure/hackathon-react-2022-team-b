import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import { COLORS } from "../constants";

const ComplaintBoxes = (props) => {

  switch(props.step) {
    case 1:

      return (
        <>
          <Title>Réponses à vos questions</Title>

          <StyledBoxHolder>

            <StyledBox onClick={props.addStep}>
              <StyledBoxInner>
                <BoxTitle>Contactez nous</BoxTitle>
                <BoxSubtitle>Par email ou par téléphone</BoxSubtitle>
              </StyledBoxInner>
            </StyledBox>

            <StyledBox>
              <StyledNavLink to="/faq">
                <StyledBoxInner>
                  <BoxTitle>Foire aux questions</BoxTitle>
                  <BoxSubtitle>La réponse à votre question se retrouve peut-être ici</BoxSubtitle>
                </StyledBoxInner>
              </StyledNavLink>
            </StyledBox>

            <StyledBox>
              <a href="https://www.reddit.com/r/flatearth/" target="_blank">
                <StyledBoxInner>
                  <BoxTitle>Forum de discussion</BoxTitle>
                  <BoxSubtitle>D'autres personnes ont peut-être eu le même problème que vous</BoxSubtitle>
                </StyledBoxInner>
              </a>
            </StyledBox>

          </StyledBoxHolder>
        </>
      );
      break;

    case 2:
      
      return (
        <>
          <Title>Avez-vous essayé ces options ?</Title>

          <StyledBoxHolder>

            <StyledBox>
              <StyledNavLink to="/faq">
                <StyledBoxInner>
                  <BoxTitle>Foire aux questions</BoxTitle>
                  <BoxSubtitle>La réponse à votre question se retrouve peut-être ici</BoxSubtitle>
                </StyledBoxInner>
              </StyledNavLink>
            </StyledBox>

            <StyledBox>
              <a href="https://www.reddit.com/r/flatearth/" target="_blank">
                <StyledBoxInner>
                  <BoxTitle>Forum de discussion</BoxTitle>
                  <BoxSubtitle>D'autres personnes ont peut-être eu le même problème que vous</BoxSubtitle>
                </StyledBoxInner>
              </a>
            </StyledBox>

          </StyledBoxHolder>

          <SmallParagraph onClick={props.addStep}>Oui, j'ai essayé ces options</SmallParagraph>
        </>
      );
      break;

    case 3:

      return (
        <>
          <Title>Contactez-nous</Title>

          <StyledBoxHolder>

            <StyledBox>
              <StyledNavLink to="/buy-a-ticket">
                <StyledBoxInner>
                  <BoxTitle>Par courriel</BoxTitle>
                </StyledBoxInner>
              </StyledNavLink>
            </StyledBox>

            <StyledBox onClick={() => props.togglePopup(props.showPopup)}>
              <StyledBoxInner>
                <BoxTitle>Par téléphone</BoxTitle>
              </StyledBoxInner>
            </StyledBox>

          </StyledBoxHolder>
        </>
      );
      break;

  }
}

const Title = styled.h1`
  font-size: 32px;
  text-align: center;
  margin-bottom: 55px;
`;
const StyledBoxHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 -15px;
`;
const StyledBox = styled.div`
  flex: 0 0 33.33%;
  max-width: 33.33%;
  padding: 0 15px;
`;
const StyledBoxInner = styled.div`
  border-radius: 10px;
  border: 1px solid ${COLORS.lightGrey};
  padding: 35px;
  cursor: pointer;
  height: 150px;
  text-align: center;
  transition: box-shadow ease 0.3s;
  &:hover {
    box-shadow: 0 0 15px 4px rgba(0,0,0,0.1);
  }
`;
const BoxTitle = styled.p`
  font-size: 18px;
  font-weight: 700;
`;
const BoxSubtitle = styled.p`
  font-size: 16px;
  margin-top: 15px;
`;
const StyledNavLink = styled(NavLink)`
  color: ${COLORS.dark};
  text-decoration: none;
`;
const StyledCustomLink = styled(NavLink)`
  color: ${COLORS.dark};
  text-decoration: none;
`;
const SmallParagraph = styled.p`
  font-size: 10px;
  text-align: center;
  margin-top: 35px;
  cursor: pointer;
`;

export default ComplaintBoxes;