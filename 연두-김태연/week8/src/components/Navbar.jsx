import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #232F54;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
  }
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: ${props => (props.open ? '0' : '-300px')};
  height: 100vh;
  width: 300px;
  background-color: #232F54;
  transition: right 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size : 30px;
  
  @media screen and (min-width: 769px) {
    display: none;
  }
`;

const SidebarToggle = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  cursor: pointer;
  z-index: 1000;
  color: #fff;
  font-size: 20px;

  @media screen and (min-width: 769px) {
    display: none;
  }
`;

const Button = styled.button`
  background-color: transparent;
  color: ${props => (props.isActive ? 'yellow' : '#fff')};
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    font-size: 18px;
    font-weight: bold;
  }
`;

const UMCButton = styled(Button)`
  @media screen and (max-width: 768px) {
    display: flex; /*UMC Movie 항상 보이게  */
    left : 10px;
    width: 100%;
    margin-bottom: 10px;
  }
`;

const RightButtonContainer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
  display: none; /* 모바일 화면 Navbar X */
}
`;

function Navbar() {
  const [activeButton, setActiveButton] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleButtonClick = buttonName => {
    setActiveButton(buttonName === activeButton ? null : buttonName);
    setSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <NavbarContainer>
        <UMCButton as={Link} to="/" noHover>
          UMC Movie
        </UMCButton>
        <RightButtonContainer open={sidebarOpen}>
          <Button
            as={Link}
            to="/signup"
            isActive={activeButton === 'signup'}
            onClick={() => handleButtonClick('signup')}
          >
            회원가입
          </Button>
          <Button
            as={Link}
            to="/popular"
            isActive={activeButton === 'popular'}
            onClick={() => handleButtonClick('popular')}
          >
            Popular
          </Button>
          <Button
            as={Link}
            to="/nowplaying"
            isActive={activeButton === 'nowplaying'}
            onClick={() => handleButtonClick('nowplaying')}
          >
            Now Playing
          </Button>
          <Button
            as={Link}
            to="/toprated"
            isActive={activeButton === 'toprated'}
            onClick={() => handleButtonClick('toprated')}
          >
            Top Rated
          </Button>
          <Button
            as={Link}
            to="/upcoming"
            isActive={activeButton === 'upcoming'}
            onClick={() => handleButtonClick('upcoming')}
          >
            Upcoming
          </Button>
        </RightButtonContainer>
      </NavbarContainer>
      <Sidebar open={sidebarOpen}>
        <Button
          as={Link}
          to="/signup"
          isActive={activeButton === 'signup'}
          onClick={() => {
            handleButtonClick('signup');
            toggleSidebar();
          }}
        >
          회원가입
        </Button>
        <Button
          as={Link}
          to="/popular"
          isActive={activeButton === 'popular'}
          onClick={() => {
            handleButtonClick('popular');
            toggleSidebar();
          }}
        >
          Popular
        </Button>
        <Button
          as={Link}
          to="/nowplaying"
          isActive={activeButton === 'nowplaying'}
          onClick={() => {
            handleButtonClick('nowplaying');
            toggleSidebar();
          }}
        >
          Now Playing
        </Button>
        <Button
          as={Link}
          to="/toprated"
          isActive={activeButton === 'toprated'}
          onClick={() => {
            handleButtonClick('toprated');
            toggleSidebar();
          }}
        >
          Top Rated
        </Button>
        <Button
          as={Link}
          to="/upcoming"
          isActive={activeButton === 'upcoming'}
          onClick={() => {
            handleButtonClick('upcoming');
            toggleSidebar();
          }}
        >
          Upcoming
        </Button>
      </Sidebar>
      <SidebarToggle onClick={toggleSidebar}>
        ☰
      </SidebarToggle>
    </>
  );
}

export default Navbar;
