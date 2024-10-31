import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ProductSearchPage from './pages/ProductSearchPage';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Accueil</Link> | <Link to="/about">À propos</Link> | <Link to="/search">Recherche Produits</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<ProductSearchPage />} />
      </Routes>
    </Router>
  );
}

export default App;
