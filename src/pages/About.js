import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 50px 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5em;
  color: #333;
  margin-bottom: 1em;
`;

const Content = styled.p`
  font-size: 1.1em;
  color: #555;
  line-height: 1.6;
`;

function About() {
  return (
    <AboutContainer>
      <Title>À Propos</Title>
      <Content>
        Notre plateforme vous permet de rechercher des produits tendances et de trouver des fournisseurs de confiance. Avec des outils basés sur l'IA, vous pouvez analyser les annonces et importer facilement des produits dans votre boutique en ligne.
      </Content>
    </AboutContainer>
  );
}

export default About;
