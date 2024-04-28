// Footer.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  color: #fff;
  padding: 5px;
  text-align: right;
`;

const Footer = () => {
  const location = useLocation();
  return (
    <StyledFooter>
      <div>https::/www.makeus.in/umc</div>
    </StyledFooter>
  );
}

export default Footer;
