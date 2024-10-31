import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const SearchContainer = styled.div`
  max-width: 800px;
  margin: 120px auto 40px;
  padding: 40px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const SearchTitle = styled.h2`
  font-size: 2em;
  color: #333;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 70%;
  padding: 15px;
  font-size: 1.2em;
  border: 1px solid #ddd;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.3s;
  margin-bottom: 20px;

  &:focus {
    border-color: #007bff;
  }
`;

const SearchButton = styled.button`
  background-color: #007bff;
  color: #ffffff;
  font-size: 1.2em;
  padding: 12px 30px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 40px;
`;

const ProductCard = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: left;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProductTitle = styled.h3`
  font-size: 1.2em;
  color: #333;
  margin-bottom: 10px;
`;

const ProductDescription = styled.p`
  font-size: 1em;
  color: #666;
  margin-bottom: 15px;
`;

function ProductSearchPage() {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);

  const handleSearch = async () => {
    // Simulate API call
    const simulatedResults = [
      { id: 1, name: `Produit tendance pour ${query}`, description: 'Un produit à découvrir.' },
      { id: 2, name: `Produit populaire pour ${query}`, description: 'Idéal pour les passionnés.' },
      { id: 3, name: `Produit recommandé pour ${query}`, description: 'Qualité et style assurés.' },
    ];
    setProducts(simulatedResults);
  };

  return (
    <div>
      <SearchContainer>
        <SearchTitle>Rechercher des Produits Tendance</SearchTitle>
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Entrez un produit à rechercher..."
        />
        <SearchButton onClick={handleSearch}>Rechercher</SearchButton>
      </SearchContainer>

      <ResultsGrid>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <ProductTitle>{product.name}</ProductTitle>
            <ProductDescription>{product.description}</ProductDescription>
          </ProductCard>
        ))}
      </ResultsGrid>
    </div>
  );
}

export default ProductSearchPage;
