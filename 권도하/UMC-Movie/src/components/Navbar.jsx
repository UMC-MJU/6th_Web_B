import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import styled from 'styled-components';

const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color:rgba(15, 9, 59, 1);
`;

const Button = styled.button`
  background-color: transparent;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none; /* 밑줄 제거 */

  &:hover {
    font-weight: bold;
  }
`;

const LeftButton = styled(Button)`
`;

const SignInButton = styled(Button)`
  margin-left: 5px;
  color: yellow;

`;

const RightButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleToggle = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <NavbarContainer>
      <LeftButton onClick={() => navigate("/")}>UMC Movie</LeftButton>
      <RightButtonContainer>
        <SignInButton onClick={() => {
          navigate(isLoggedIn ? "/" : "/signin");
          handleToggle();
        }}>
          {isLoggedIn ? '로그아웃' : '로그인'}
        </SignInButton>
        <Button onClick={() => navigate("/signup")}>회원가입</Button> 
        <Button onClick={() => navigate("/popular")}>Popular</Button> 
        <Button onClick={() => navigate("/nowplaying")}>Now Playing</Button>
        <Button onClick={() => navigate("/toprated")}>Top Rated</Button>
        <Button onClick={() => navigate("/upcoming")}>Upcoming</Button>
      </RightButtonContainer>
    </NavbarContainer>
  );
}

export default Navbar;
