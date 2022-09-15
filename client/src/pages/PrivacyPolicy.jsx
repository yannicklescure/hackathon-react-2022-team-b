import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import PolicyContent from '../components/PolicyContent'

const PrivacyPolicy = () => {
    //const [isLoadead, setIsLoadead] = useState(false);
    const [lang, setLang] = useState('french');

    const langArr = ['french', 'english', 'norwegian', 'mandarin', 'russian']

    useEffect(() => {
        setTimeout(() => {
            setLang('norwegian');
        }, 5000);
    }, []);

    function handleClick() {
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

function randNum(arr,excludeNum){
    var randNumber = Math.floor(Math.random()*arr.length);
    if(randNumber==excludeNum){
        return randNum(arr,excludeNum);
    }else{
        return randNumber;
    }
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
