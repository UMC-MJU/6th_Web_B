// MainPage.jsx
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
  h1,h2{
    color : white;
  }
`;

const MainPageContainer = styled.div`
  background-color:rgba(15, 9, 59, 0.856);
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

const FindContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 50px;
  height: 50vh;
  box-sizing: border-box;
  text-align: center;
  background-color:rgba(15, 9, 59, 0.856);
`;

const SearchInput = styled.input`
  width: 300px;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #333;
  border-radius: 50px;
`;

const SearchButton = styled.button`
  position: absolute;
  top: 43%;
  transform: translateY(-50%);
`;

function MainPage() {
  return (
    <div>
      <GlobalStyle />
      <MainPageContainer>
        <h1>환영합니다</h1>
      </MainPageContainer>
      <FindContainer>
        <h2> 📽️ Find your movies !</h2>
        <SearchInput type="text"/>
        <SearchButton>🔍</SearchButton>
      </FindContainer>
    </div>
  );
}

export default MainPage;
