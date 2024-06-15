import React, { useState } from "react";
import styled from "styled-components";
import SearchMovie from "./SearchMovie";
import Movie from "./Movie";

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
const BannerContainer = styled.div`
  width: 100%;
  height: 500px;
  background-color: black;
  display: flex;
  justify-content: center;
`;

const BannerText = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
`;

const SearchContainer = styled.div`
  width: 100%;
  height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #1f2141;
`;

const SearchTitle = styled.h1`
  width: 40%;
  text-align: center;
  font-size: 30px;
  color: white;
  margin-top: 50px;
`;

export default function Banner() {
  return (
    <Container>
      <BannerContainer>
        <BannerText>환영합니다</BannerText>
      </BannerContainer>
      <SearchContainer>
        <SearchTitle>📽 Find your movies!</SearchTitle>
        <SearchMovie />
      </SearchContainer>
    </Container>
  );
}
