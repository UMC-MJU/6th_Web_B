import React from 'react';
//import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #693DAE;
  color: #fff;
  padding: 15px;
  text-align: center;
  font-size : 30px;
`;

const Footer = () => {
  //const location = useLocation();
  return (
    <StyledFooter>
      <div>University Makeus Challenge</div>
    </StyledFooter>
  );
}

export default Footer;