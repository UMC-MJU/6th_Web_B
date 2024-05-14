import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #232F54;
  }
`;

const MainPageContainer = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0f031a;
  
`;
//환영합니다 
const WelcomeMessage = styled.h2`
  color: #fff;
  text-align: center;
  font-size: 30px;
`;

const LowerSection = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
`;


const Text = styled.h1`
  color: #fff;

`;

//막대과자 모양 스타일
const SearchInput = styled.input`
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #333;
  border-radius: 50px;
  width : 310px;
`;


function MainPage() {
  return (
    <div>
      <GlobalStyle />
      <MainPageContainer>
        <WelcomeMessage>환영합니다</WelcomeMessage>
      </MainPageContainer>
      <LowerSection>
        <Text>Find your movies !</Text>
        <SearchInput type="text"/>
      </LowerSection>
    </div>
  );
}

export default MainPage;