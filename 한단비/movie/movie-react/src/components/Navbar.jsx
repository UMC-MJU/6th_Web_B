import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.div`
  background-color: #171a32;
`;

const NavWrapper = styled.div`
  height: 64px;
  margin: 0;
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
  color:  ${(props) => props.color || "white"};
  text-decoration: none;
`;

export default function Navbar() {
    const [color, setColor] = useState('white');

    const handleClick = () => {
      setColor('#E1C35C');
    };

  return (
    <NavContainer>
      <NavWrapper>
        <LogoWrapper>
          <Link className="logo" to="/">
            UMC Movie
          </Link>
        </LogoWrapper>
        <ButtonWrapper>
          <ul>
            <li>
              <StyledLink to="/register" color={color} onClick={handleClick}>회원가입</StyledLink>
            </li>
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
      </NavWrapper>
    </NavContainer>
  );
}
