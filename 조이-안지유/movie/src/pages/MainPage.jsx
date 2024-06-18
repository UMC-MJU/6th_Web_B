import React from 'react';
import styled from "styled-components";
import SearchMovies from "../components/SearchMovies.jsx";

const MainPage = () => {
  return (
    <MainContainer>
      <BannerContainer>
        <TitleText>환영합니다</TitleText>
      </BannerContainer>
      <SearchContainer>
        <SearchText>📽 Find your movies !</SearchText>
        {/*<SearchBox>*/}
        <SearchMovies/>
        {/*</SearchBox>*/}
      </SearchContainer>
    </MainContainer>
  );
};

export default MainPage;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  width: 100%;
  height: 50vh;
  background: black;
`
const TitleText = styled.h1`
  color: white;
  text-align: center;
  max-width: 100%;
  max-height: 100%;
  font-size: 4vw;

  @media (max-height: 400px) {
    font-size: 3vh;
  }

`

const SearchContainer = styled(BannerContainer)`
  background: rgb(26, 35, 78);
  flex-direction: column;
  justify-content: center;
`

const SearchText = styled(TitleText)`
  margin: 0;
  padding-bottom: 18vh;
`
