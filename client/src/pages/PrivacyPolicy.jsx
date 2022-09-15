import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import PolicyContent from '../components/PolicyContent'

const randNum = (arr, excludeNum) => {
  let randNumber = Math.floor(Math.random()*arr.length);
  return (randNumber === excludeNum) ? randNum(arr,excludeNum) : randNumber;
};

const PrivacyPolicy = () => {
  //const [isLoadead, setIsLoadead] = useState(false);
  const [lang, setLang] = useState('french');

  const langArr = ['french', 'english', 'norwegian', 'mandarin', 'russian']

  useEffect(() => {
    setTimeout(() => {
      setLang('norwegian');
    }, 5000);
  }, []);

  const handleClick = () => {
    let currentLang = langArr.indexOf(lang)
    setLang(langArr[randNum(langArr, currentLang)]);
  }

  return (
    <Wrapper>
      <LangSwitch>
        <Lang onClick={handleClick}>Français</Lang>
        <Lang onClick={handleClick}>English</Lang>
      </LangSwitch>
      <div className='policyContent'>
        <PolicyContent lang={lang}></PolicyContent>
      </div>
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
const Lang = styled.span`
  margin: 0 10px;
  cursor: pointer;
`;

export default PrivacyPolicy;
