import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Input = styled.input`
  width: 80%;
  padding: 10px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #ddd;
  margin-bottom: 15px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const Results = styled.div`
  margin-top: 20px;
  text-align: left;
`;

const ProductSearch = () => {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);

  const handleSearch = async () => {
    // API call simulation
    const results = [
      { id: 1, name: `Produit tendance pour ${query}` },
      { id: 2, name: `Autre produit tendance pour ${query}` }
    ];
    setProducts(results);
  };

  return (
    <Container>
      <h2>Recherche de Produits Tendance</h2>
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Rechercher un produit..."
      />
      <Button onClick={handleSearch}>Rechercher</Button>
      
      <Results>
        {products.map((product) => (
          <div key={product.id}>{product.name}</div>
        ))}
      </Results>
    </Container>
  );
};

export default ProductSearch;
