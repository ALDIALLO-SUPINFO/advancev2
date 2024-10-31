// src/components/Card.js
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 15px;
  width: 400px;
  padding: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const LiveBadge = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: #ff4d4f;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: bold;
`;

const CreditBadge = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: #f1f1f1;
  color: #666;
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: bold;
`;

const CardTitle = styled.h3`
  font-size: 1.2em;
  color: #333;
  font-weight: bold;
`;

const CardSubtitle = styled.p`
  color: #666;
  margin-top: 5px;
`;

const Button = styled.button`
  background-color: #0066ff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1em;
  font-weight: bold;
  margin-top: 15px;
  &:hover {
    background-color: #0051cc;
  }
`;

const Card = ({ live, credits, title, subtitle, buttonText }) => {
  return (
    <CardContainer>
      {live && <LiveBadge>LIVE</LiveBadge>}
      {credits && <CreditBadge>{credits} crédits</CreditBadge>}
      <CardTitle>{title}</CardTitle>
      <CardSubtitle>{subtitle}</CardSubtitle>
      <Button>{buttonText}</Button>
    </CardContainer>
  );
};

export default Card;
