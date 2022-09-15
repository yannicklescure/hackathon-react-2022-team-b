import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import { COLORS } from "../constants";
//import { ComplaintContent } from "../contents/complaint";
import ComplaintBoxes from "../components/ComplaintBoxes";
import Popup from "../components/Popup";

const Complaint = () => {

    //const boxes = ComplaintContent;
    const [step, setStep] = useState(1);
    const [showPopup, setShowPopup] = useState(false);

    function addStep() {
        setStep(step + 1);
    }

    function togglePopup() {
        setShowPopup(current => !current)
    }

    return (
        <Wrapper>
            <ComplaintBoxes
                step={step}
                addStep={addStep}
                togglePopup={() => togglePopup(showPopup)}
                showPopup={showPopup} />
            <Popup
                title="Appel téléphonique"
                content="Ce service n'est pas disponible pour le moment"
                togglePopup={togglePopup}
                showPopup={showPopup} />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    max-width: 960px;
    padding: 100px 0;
    margin: auto;
`;
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
const SmallParagraph = styled.p`
  font-size: 10px;
  text-align: center;
  margin-top: 35px;
  cursor: pointer;
`;

export default Complaint;
