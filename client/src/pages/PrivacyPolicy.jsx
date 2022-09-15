import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import PolicyContent from '../components/PolicyContent'
import { policyContents } from '../contents/Policy';

const PrivacyPolicy = () => {
  const [lang, setLang] = useState('french');
  
  const randNum = (arr) => {
    let currentLangIndex = arr.indexOf(lang);
    let randNumber = Math.floor(Math.random()*arr.length);
    return (randNumber === currentLangIndex) ? randNum(arr, currentLangIndex) : randNumber;
  };

  const newLangFunc = () => {
    const langArr = Object.keys(policyContents);
    setLang(langArr[randNum(langArr, lang)]);
  };

  useEffect(() => {
    setTimeout(() => {
      newLangFunc();
    }, 5000);
  }, []);

  const handleClick = () => {
    newLangFunc();
  }

  return (
    <Wrapper>
      <LangSwitch>
        <Lang onClick={handleClick}>Français</Lang>
        <Lang onClick={handleClick}>English</Lang>
      </LangSwitch>
      <PolicyContent lang={lang}></PolicyContent>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 960px;
  padding: 50px 0;
  margin: auto;
`;
const LangSwitch = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 45px;
`;
const Lang = styled.p`
  margin: 0 10px;
  cursor: pointer;
`;

export default PrivacyPolicy;
