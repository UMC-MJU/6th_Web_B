import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {FiMenu} from "react-icons/fi";
import {useMediaQuery} from "react-responsive";
import Sidebar from "./Sidebar";

const NavContainer = styled.div`
  background-color: #171a32;
`;

const NavWrapper = styled.div`
  height: 64px;
  margin-right: 1rem;
  justify-content: space-between;
  display: flex;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;

  > ul {
    display: flex;
  }

  > ul > li {
    margin-right: 14px;
    padding: 8px;
  }
`;

const LogoWrapper = styled.div`
  margin-left: 20px;
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.color || "white"};
  text-decoration: none;
`;

export default function Navbar() {
  const [color, setColor] = useState("white");
  const [cookies, removeCookies] = useCookies(["user"]);
  const isLoggedIn = !!cookies.user; // 쿠키에 정보가 있으면 로그인 된 것
  const isSidebar = useMediaQuery({maxWidth: 1024});
  const handleClick = () => {
    setColor("#E1C35C");
  };

  const logoutE = () => {
    removeCookies('user');
  }

  // sidebar 상태
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // sidebar 이벤트
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <NavContainer>
      <NavWrapper>
        <LogoWrapper>
          <Link className="logo" to="/">
            UMC Movie
          </Link>
        </LogoWrapper>
        {isSidebar ? (
          <FiMenu size="20" color="#5678BE" onClick={toggleSidebar}/>
        ) : (
          <ButtonWrapper>
          <ul>
            {!isLoggedIn ? (
              <>
                <li>
                  <StyledLink to="/login">로그인</StyledLink>
                </li>
                <li>
                  <StyledLink to="/register">회원가입</StyledLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <StyledLink to="/" onClick={logoutE}>로그아웃</StyledLink>
                </li>
              </>
            )}
            <li>
              <StyledLink to="/popular">Popular</StyledLink>
            </li>
            <li>
              <StyledLink to="/nowplaying">Now Playing</StyledLink>
            </li>
            <li>
              <StyledLink to="/toprated">Top Rated</StyledLink>
            </li>
            <li>
              <StyledLink to="/upcoming">Upcoming</StyledLink>
            </li>
          </ul>
        </ButtonWrapper>
        )}
        
      </NavWrapper>
      {isSidebarOpen && <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>}
    </NavContainer>
  );
}
