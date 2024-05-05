import React from 'react';
import styled from 'styled-components';

const HomePageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;  
  font-size: 24px;
  font-weight: bold;
`;

function HomePage() {
  return (
    <HomePageContainer>
      환영합니다
    </HomePageContainer>
  );
}

export default HomePage;
