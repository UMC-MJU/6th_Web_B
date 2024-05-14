import React from 'react';
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const goMain = () => {
    navigate(`/`);
  }
  return (
    <HeaderContainer>
      <LogoTitle onClick={goMain}>UMC Movie</LogoTitle>
      <MoveCategory>
        <CategoryTitle>회원가입</CategoryTitle>
        <CategoryTitle onClick={() => {
          navigate(`/popular`)
        }}>Popular</CategoryTitle>
        <CategoryTitle onClick={() => {
          navigate(`/nowplaying`)
        }}>Now Playing</CategoryTitle>
        <CategoryTitle onClick={() => {
          navigate(`/toprated`)
        }}>Top Rated</CategoryTitle>
        <CategoryTitle onClick={() => {
          navigate(`/upcoming`)
        }}>Upcoming</CategoryTitle>
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

  cursor: pointer;
`

const MoveCategory = styled.div`
  display: flex;
`

const CategoryTitle = styled.button`
  color: white;
  margin: 0 10px;
  font-size: 13px;
  cursor: pointer;
  background: transparent;
  border: none;

  &:hover {
    font-size: 15px;
    color: gold;
    font-weight: bold;
  }
`
