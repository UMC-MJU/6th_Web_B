import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

const MainPageContainer = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #333;
`;

const WelcomeMessage = styled.h2`
  color: #fff;
`;

const LowerSection = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
`;

const Text = styled.p`
  color: #333;
`;

const SearchInput = styled.input`
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #333;
  border-radius: 50px;
`;


function MainPage() {
  return (
    <div>
      <GlobalStyle />
      <MainPageContainer>
        <WelcomeMessage>환영합니다!</WelcomeMessage>
      </MainPageContainer>
      <LowerSection>
        <Text>Find your movies !</Text>
        <SearchInput type="text"/>
      </LowerSection>
    </div>
  );
}

export default MainPage;
