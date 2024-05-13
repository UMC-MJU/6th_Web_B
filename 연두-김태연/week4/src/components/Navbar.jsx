import React from 'react';
import { Link, Route, Router } from 'react-router-dom';
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
`;

const Button = styled.button`
  background-color: transparent;
  /*클릭할 때 색상 변경을 위한 부분*/
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

const LeftButton = styled(Button)`
  ${props =>
    props.noHover &&
    css`
      &:hover {
        font-size: initial;
        font-weight: initial;
      }
    `}
`;

const RightButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

function Navbar() {
  const [activeButton, setActiveButton] = React.useState(null);

  const handleButtonClick = buttonName => {
    setActiveButton(buttonName === activeButton ? null : buttonName);
  };

  return (
    <NavbarContainer>
      <LeftButton as={Link} to="/" noHover>
        UMC Movie
      </LeftButton>
      <RightButtonContainer>
        <Button as={Link} to="/signup" isActive={activeButton === 'signup'} onClick={() => handleButtonClick('signup')}>
          {activeButton === 'signup' ? '로그아웃' : '로그인'}
        </Button>
        <Button as={Link} to="/popular" isActive={activeButton === 'popular'} onClick={() => handleButtonClick('popular')}>
          Popular
        </Button>
        <Button as={Link} to="/nowplaying" isActive={activeButton === 'nowplaying'} onClick={() => handleButtonClick('nowplaying')}>
          Now Playing
        </Button>
        <Button as={Link} to="/toprated" isActive={activeButton === 'toprated'} onClick={() => handleButtonClick('toprated')}>
          Top Rated
        </Button>
        <Button as={Link} to="/upcoming" isActive={activeButton === 'upcoming'} onClick={() => handleButtonClick('upcoming')}>
          Upcoming
        </Button>
      </RightButtonContainer>
    </NavbarContainer>
  );
}

export default Navbar;
