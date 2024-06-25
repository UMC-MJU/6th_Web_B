import React from 'react';
import styled from 'styled-components';

const StyledNavbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #693DAE;
  font-size : 30px;
  color : #fff;
  text-align: center;
  font-weight: bold;
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <div>UMC PlayList</div>
    </StyledNavbar>
  );
}

export default Navbar;