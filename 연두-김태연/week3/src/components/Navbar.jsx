import React from 'react';
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
  
`;

const Button = styled.button`
  background-color: transparent;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;

  /* 모든 버튼에 대한 hover 효과 */
  &:hover {
    font-size: 18px;
    font-weight: bold;
  }
`;

const LeftButton = styled(Button)`
  // UMC Movie에 hover 효과 제거
  ${props =>
    props.noHover &&
    css`
      &:hover {
        font-size: initial;
        font-weight: initial;
      }
    `}
`;

const RightButton = styled(Button)`
  margin-left: 5px;
`;

const RightButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

function Navbar() {
  return (
    <NavbarContainer>
      <LeftButton as={Link} to="/" noHover>UMC Movie</LeftButton>
      <RightButtonContainer>
        <Button as={Link} to="/signup">회원가입</Button> 
        <Button as={Link} to="/popular">Popular</Button> {/* PopularPage로 이동하는 링크 추가 */}
        <Button as={Link} to="/nowplaying">Now Playing</Button>
        <Button as={Link} to="/toprated">Top Rated</Button>
        <Button as={Link} to="/upcoming">Upcoming</Button>
      </RightButtonContainer>
    </NavbarContainer>
  );
}

export default Navbar;