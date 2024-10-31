//src\components\Header.js

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  width: 100%;
  padding: 20px 40px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const Logo = styled.h1`
  font-size: 1.5em;
  font-weight: bold;
  color: #333;
  margin: 0;
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-size: 1em;
  transition: color 0.3s;

  &:hover {
    color: #007bff;
  }
`;

const AuthLinks = styled.div`
  display: flex;
  align-items: center;
`;

const LoginButton = styled(Link)`
  background-color: #333;
  color: white;
  font-size: 0.9em;
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #444;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <LeftSection>
        <Logo>AdVance</Logo>
        <NavLinks>
          <NavLink to="/">Prix</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
          <NavLink to="/adspy">Adspy</NavLink>
        </NavLinks>
      </LeftSection>
      <AuthLinks>
        <LoginButton to="/login">Se connecter</LoginButton>
      </AuthLinks>
    </HeaderContainer>
  );
}

export default Header;
