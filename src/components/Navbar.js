// src/components/Navbar.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 30px;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h1`
  font-size: 1.5em;
  font-weight: bold;
  color: #fbbd0a;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
  font-size: 1em;
  font-weight: 500;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  position: relative;

  &:hover {
    color: #fbbd0a;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    right: 0;
    height: 2px;
    background-color: #fbbd0a;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::after {
    opacity: 1;
  }
`;

const NewBadge = styled.span`
  background-color: #fbbd0a;
  color: #fff;
  font-size: 0.75em;
  font-weight: bold;
  padding: 2px 6px;
  border-radius: 5px;
  margin-left: 5px;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const LanguageSelector = styled.select`
  border: none;
  background-color: #f7f7f7;
  padding: 5px 10px;
  font-size: 1em;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
`;

const ProfileIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #333;
  font-size: 1.2em;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>AdVance</Logo>
      <NavLinks>
        <NavLink to="/campaigns">Campagnes Publicitaires</NavLink>
        <NavLink to="/boutiques">Boutiques</NavLink>
        <NavLink to="/produits">
          Produits<NewBadge>NEW</NewBadge>
        </NavLink>
        <NavLink to="/magic-search">Magic Search</NavLink>
        <NavLink to="/success-radar">Success Radar</NavLink>
      </NavLinks>
      <RightSection>
        <LanguageSelector>
          <option value="fr">Français</option>
          <option value="en">English</option>
        </LanguageSelector>
        <ProfileIcon>👤</ProfileIcon>
      </RightSection>
    </NavbarContainer>
  );
};

export default Navbar;