import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 20px 40px;
  background-color: #f8f9fa;
  color: #777;
  text-align: center;
  font-size: 0.9em;
  border-top: 1px solid #ddd;
`;

function Footer() {
  return (
    <FooterContainer>
      © 2024 MineaClone. Tous droits réservés | <a href="/privacy">Politique de Confidentialité</a>
    </FooterContainer>
  );
}

export default Footer;
