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
`

const SearchContainer = styled(BannerContainer)`
  height: 50vh;
  background: rgb(26, 35, 78);
  flex-direction: column;
`

const SearchText = styled(TitleText)`
  font-size: 38px;
  margin-top: -130px;
  margin-bottom: 50px;
`
