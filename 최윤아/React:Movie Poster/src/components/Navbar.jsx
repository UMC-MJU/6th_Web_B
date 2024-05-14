// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  background-color: #343a40;
  color: white;
  padding: 10px 20px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 5000;
  a {
    color: white;
    margin-right: 30px;
    text-decoration: none;
    &:hover {
      color: #aaa;
      transform: scale(1.1);
      cursor: pointer;
    }
  }
`;

function Navbar() {
  return (
    <NavContainer>
      <Link to="/HomePage">회원가입</Link>
      <Link to="/Views/Popular">Popular</Link>
      <Link to="/Views/NowPlaying">Now Playing</Link>
      <Link to="/Views/TopRated">Top Rated</Link>
      <Link to="/Views/Upcoming">UpComing</Link>
    </NavContainer>
  );
}

export default Navbar;
