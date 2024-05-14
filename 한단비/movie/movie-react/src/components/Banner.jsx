import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
const BannerContainer = styled.div`
  width: 100%;
  height: 40vh;
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
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1F2141;
`;

const SearchTitle = styled.h1`
  width: 40%;
  text-align: center;
  font-size: 30px;
  color: white;
`

const InputContainer = styled.div`
  width: 50%;
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const SearchInput = styled.input`
  width: 30%;
  height: 25px;
  border-radius: 25px;
  border: none;
  padding: 10px;
`;

const SearchIcon = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FEC623;
  border: none;
  border-radius: 30px;
`

export default function Banner() {
  return (
    <Container>
      <BannerContainer>
        <BannerText>환영합니다</BannerText>
      </BannerContainer>
      <SearchContainer>
        <SearchTitle>📽 Find your movies!</SearchTitle>
        <InputContainer>
          <SearchInput></SearchInput>
          <SearchIcon>🔍</SearchIcon>
        </InputContainer>
      </SearchContainer>
    </Container>
  );
}
