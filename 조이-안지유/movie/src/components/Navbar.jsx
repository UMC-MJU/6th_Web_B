import React, {useState} from 'react';
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {FiMenu} from "react-icons/fi";


const Navbar = () => {
  const [isLogin, setIsLogin] = useState("로그인");
  const navigate = useNavigate();


  const goMain = () => {
    navigate(`/`);
  }

  const handleLogin = () => {
    if (isLogin === "로그인") {
      setIsLogin("로그아웃");
    } else {
      setIsLogin("로그인");
    }
    navigate(`/signup`);
  };

  return (
    <>
      <HeaderContainer>
        <LogoTitle onClick={goMain}>UMC Movie</LogoTitle>
        <MoveCategory>
          <CategoryTitle onClick={handleLogin}>회원가입</CategoryTitle>
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
      <SideBarContainer>
        <LogoTitle onClick={goMain}>UMC Movie</LogoTitle>
        <FiMenu/>
      </SideBarContainer>å
    </>
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

  @media (max-width: 550px) {
    display: none;
    justify-content: space-between;
  }
`

const SideBarContainer = styled.div`
  display: none;
  width: 100%;
  height: 40px;
  top: 0;
  left: 0;
  background-color: rgb(21, 30, 63);
  position: fixed;

  @media (max-width: 550px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
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
