// Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #343a40;
  color: white;
  text-align: left;
  padding: 20px;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

function Footer() {
  return (
    <FooterContainer>
      https://github.com/choi-yuna
    </FooterContainer>
  );
}

export default Footer;
