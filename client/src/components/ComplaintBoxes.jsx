import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import { COLORS } from "../constants";
import {ComplaintArr} from "../contents/complaint";
import Popup from "./Popup";

const ComplaintBoxes = () => {

  const boxes = ComplaintArr;

  const [step, setStep] = useState(1);
  const [showPopup, setShowPopup] = useState(false);

  function addStep() {
      setStep(step + 1);
  }

  function togglePopup() {
      setShowPopup(current => !current)
  }

  return (
    <>
      <Title>{boxes[step - 1].title}</Title>
      <StyledBoxHolder>
        
        {boxes[step - 1].boxes.map((key, index) => {

          if(key.type === 'onclick') {

            return (
              <StyledBox key={index} onClick={
                key.action === 'addStep'
                ? addStep
                : () => togglePopup(showPopup)}>
                <StyledBoxInner>
                  <BoxTitle>{key.title}</BoxTitle>
                  <BoxSubtitle>{key.subtitle}</BoxSubtitle>
                </StyledBoxInner>
              </StyledBox>
            )

          } else if(key.type === 'link') {

            return (
              <StyledBox key={index}>
                <StyledNavLink to={key.action}>
                  <StyledBoxInner>
                    <BoxTitle>{key.title}</BoxTitle>
                    <BoxSubtitle>{key.subtitle}</BoxSubtitle>
                  </StyledBoxInner>
                </StyledNavLink>
              </StyledBox>
            )

          } else if(key.type === 'external') {

            return (
              <StyledBox key={index}>
                <a href={key.action} target="_blank">
                  <StyledBoxInner>
                    <BoxTitle>{key.title}</BoxTitle>
                    <BoxSubtitle>{key.subtitle}</BoxSubtitle>
                  </StyledBoxInner>
                </a>
              </StyledBox>
            )

          } else {

            return (
              <StyledBox>
                <StyledBoxInner>
                  <BoxTitle>{key.title}</BoxTitle>
                  <BoxSubtitle>{key.subtitle}</BoxSubtitle>
                </StyledBoxInner>
              </StyledBox>
            )

          }
        })}
      </StyledBoxHolder>
      { step === 2 &&
        <SmallParagraph onClick={addStep}>Oui, j'ai essayé ces options</SmallParagraph>
      }
      <Popup
        title="Appel téléphonique"
        content="Ce service n'est pas disponible pour le moment"
        togglePopup={togglePopup}
        showPopup={showPopup} />
    </>
  )
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

  a {
    text-decoration: none;
    color: ${COLORS.dark};
  }
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
  line-height: 1.2;
  margin-top: 15px;
`;
const StyledNavLink = styled(NavLink)`
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