import styled from "styled-components";
import { COLORS } from "../constants";
import {FAQquestions} from "../contents/faq";
import {useEffect, useState} from "react";

const Faq = () => {
    const [elements, setElements] = useState(FAQquestions);
    const [forceUpdate, setForceUpdate] = useState(0);

    useEffect(() => {
        elements[0].isOpen = true;
    })

    const handleClick = (e) => {
      const index = parseInt(e.currentTarget.id.replace('q',''));
      let els = elements;
      let closeAccordion = els[index].isOpen;
      els.forEach((el, i) => {
        els[i].isOpen = false;
      });
      if(!closeAccordion) els[index].isOpen = true;
      setElements(els);
      setForceUpdate(forceUpdate+1);
    }

    return (
        <>
          <StyledH1>FAQ</StyledH1>
          <QuestionsWrapper>
            {elements.map((element, index) => (
              <QuestionWrapper key={element.question}>
                <Question id={'q'+index} onClick={(e) => handleClick(e)}>{element.question} <QuestionIcon>{element.isOpen ? "-" : "+"}</QuestionIcon></Question>
                <Answer isOpen={element.isOpen}>{element.answer}</Answer>
              </QuestionWrapper>
            ))}
          </QuestionsWrapper>
        </>
    )
};

const StyledH1 = styled.h1`
  color: ${COLORS.black};
  font-size: 3rem;
  text-align: center;
  margin-bottom: 1rem;
  margin-top 1rem;
`;

const QuestionsWrapper = styled.div`
  padding: 0rem 25% 5%;
`;

const QuestionWrapper = styled.div`
  background-color: ${COLORS.code};
  margin-bottom: 0.5rem;
  padding: 1%;
`;

const Question = styled.button`
  width: 100%;
  text-align: left;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  font-size: inherit;
  font-weight: bold;
`;

const QuestionIcon = styled.span`
  float: right;
  padding-right: 1rem;
`;

const Answer = styled.div`
  transition: ${({isOpen}) => isOpen ? "visible 0.35s, max-height 0.35s ease-in" : "hidden 0.15s, max-height 0.15s ease-out" };
  max-height: ${({isOpen}) => isOpen ? "1000px" : "0" };
  padding-top: ${({isOpen}) => isOpen ? "0.5rem" : "0" };
  overflow: hidden;
  line-height: 20px;
`;

export default Faq;