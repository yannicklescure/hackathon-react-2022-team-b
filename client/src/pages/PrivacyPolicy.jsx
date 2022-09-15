import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import PolicyContent from '../components/PolicyContent'
import { policyContents } from '../contents/Policy';
import { NavLink } from "react-router-dom";
import { COLORS } from "../constants";

const PrivacyPolicy = () => {
  const [lang, setLang] = useState('french');
  
  const randNum = (arr, excludedNumber) => {
    console.log(excludedNumber);
    let randNumber = excludedNumber;
    const min = 0;
    const max = Math.floor(arr.length - 1);
    while(randNumber === excludedNumber) {
      randNumber =  Math.floor(Math.random() * (max - min + 1) + min);
    }
    return randNumber;
  };
  
  const newLangFunc = (currentLang) => {
    const langArr = Object.keys(policyContents);
    setLang(langArr[randNum(langArr, langArr.indexOf(currentLang))]);
  };
  
  useEffect(() => {
    setTimeout(() => {
      newLangFunc(lang);
    }, 5000);
  }, []);

  const handleClick = (selectedLang) => {
    newLangFunc(selectedLang);
  }

  return (
    <Wrapper>
      <Container>
        <StyledNavLink to="/service-client">Contacter le service client</StyledNavLink>
        <LangSwitch>
          <Lang onClick={() => handleClick('french')}>Français</Lang>
          <Lang onClick={() => handleClick('english')}>English</Lang>
        </LangSwitch>
      </Container>
      <PolicyContent lang={lang}></PolicyContent>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 950px;
  margin: auto;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 32px 0;
`;
const LangSwitch = styled(Container)`
  justify-content: center;
  margin: 0;
  gap: 16px;
`;
const Lang = styled.p`
  cursor: pointer;
`;
const StyledNavLink = styled(NavLink)`
  background-color: ${COLORS.primary};
  border: 2px solid ${COLORS.primary};
  text-decoration: none;
  border-radius: 4px;
  color: ${COLORS.light};
  padding: 12px 24px;
  transition: all ease 300ms;
  &:hover {
    background-color: transparent;
    color: ${COLORS.primary};
  }
`;

export default PrivacyPolicy;
