import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { policyContents } from '../contents/Policy';

const PolicyContent = ({ lang }) => {
  const [content, setContent] = useState({title: '', subtitle: '', text: []})

  useEffect(() => {
    setContent(policyContents[lang]);
  }, [lang])

  return (
    <Wrapper>
      <Title>{content.title}</Title>
      <TitleH2>{content.subtitle}</TitleH2>
      {content.text.map(value => (
        <Paragraph key={value}>{value}</Paragraph>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 950px;
  margin: 0 auto;
`;
const Title = styled.h1`
    font-size: 32px;
    margin-bottom: 35px;
`;
const TitleH2 = styled.h2`
    font-size: 26px;
    margin-bottom: 25px;
`;
const Paragraph = styled.p`
    line-height: 1.6;
    margin-bottom: 35px;
`;

export default PolicyContent;