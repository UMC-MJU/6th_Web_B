import React from 'react';
import styled from "styled-components";

const Navbar = () => {
  return (
    <HeaderContainer>
      <LogoTitle>UMC Movie</LogoTitle>
      <MoveCategory>
        <CategoryTitle>회원가입</CategoryTitle>
        <CategoryTitle>Popular</CategoryTitle>
        <CategoryTitle>Now Playing</CategoryTitle>
        <CategoryTitle>Top Rated</CategoryTitle>
        <CategoryTitle>Upcoming</CategoryTitle>
      </MoveCategory>
    </HeaderContainer>
  );
};

export default Navbar;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(21, 30, 63);
  width: 100%;
  height: 40px;
  position: fixed;
  top: 0;
  left: 0;
`

const LogoTitle = styled.p`
  color: white;
  margin-left: 10px;
`

const MoveCategory = styled.div`
  display: flex;
`

const CategoryTitle = styled.p`
  color: white;
  margin: 0 10px;
  font-size: 13px;
`
