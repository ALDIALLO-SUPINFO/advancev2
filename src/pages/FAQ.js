import React, { useState } from 'react';
import styled from 'styled-components';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 100px auto;
  padding: 20px;
  text-align: left;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5em;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

const SubTitle = styled.p`
  font-size: 1em;
  color: #ffa500;
  font-weight: bold;
`;

const QuestionContainer = styled.div`
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  margin-bottom: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
`;

const Question = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f9f9f9;
  }
`;

const QuestionText = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2em;
  font-weight: 500;
  color: #333;
`;

const IconWrapper = styled.div`
  font-size: 1.5em;
  color: #ffa500;
  margin-right: 10px;
`;

const ChevronIcon = styled.div`
  font-size: 1.2em;
  color: #888;
`;

const Answer = styled.div`
  padding: 0 20px 20px;
  font-size: 1em;
  color: #666;
  line-height: 1.6;
  display: ${props => (props.isOpen ? 'block' : 'none')};
  transition: all 0.3s ease;
`;

const FAQItem = ({ question, answer, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => setIsOpen(!isOpen);

  return (
    <QuestionContainer>
      <Question onClick={toggleFAQ}>
        <QuestionText>
          <IconWrapper>{icon}</IconWrapper>
          {question}
        </QuestionText>
        <ChevronIcon>{isOpen ? <FaChevronUp /> : <FaChevronDown />}</ChevronIcon>
      </Question>
      <Answer isOpen={isOpen}>{answer}</Answer>
    </QuestionContainer>
  );
};

const FAQ = () => {
  const faqData = [
    { question: "À quoi sert cette plateforme ?", answer: "Cette plateforme vous aide à trouver des produits tendances, à analyser les performances et à importer dans votre boutique.", icon: "🤔" },
    { question: "L'abonnement est-il sans engagement ?", answer: "Oui, l'abonnement peut être annulé à tout moment sans engagement.", icon: "🤝" },
    { question: "Comment annuler mon abonnement ?", answer: "Vous pouvez annuler votre abonnement directement depuis votre espace utilisateur ou en contactant le support.", icon: "💳" },
    { question: "Comment fonctionnent les crédits ?", answer: "Les crédits vous permettent d’effectuer des recherches et d’analyser des produits. Ils sont rechargés chaque mois selon votre plan.", icon: "💡" },
  ];

  return (
    <FAQContainer>
      <Header>
        <SubTitle>Pas encore convaincu ?</SubTitle>
        <SectionTitle>Questions fréquentes</SectionTitle>
      </Header>
      {faqData.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} icon={item.icon} />
      ))}
    </FAQContainer>
  );
};

export default FAQ;
