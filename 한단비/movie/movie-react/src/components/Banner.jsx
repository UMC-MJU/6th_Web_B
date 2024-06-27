import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SearchMovie from "./SearchMovie";
import Movie from "./Movie";
import AuthUser from "./AuthUser";
import { useCookies } from "react-cookie";
import { useCallback } from "react";

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
  const [username, setUsername] = useState("");
  const [cookies] = useCookies(["user"]);
  const isLoggedIn = !!cookies.user; // 쿠키에 정보가 있으면 로그인 된 것

  const userInfo = useCallback(async () => {
    try {
      const result = await AuthUser();
      console.log("사용자 정보", result);
      if (isLoggedIn) {
        setUsername(result.name);
      } else {
        setUsername("");
      }
    } catch (error) {
      console.log("사용자 정보 못 받아옴", error);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn) {
      userInfo();
    } else {
      setUsername('');
    }
  }, [userInfo, isLoggedIn]);
  

  return (
    <Container>
      <BannerContainer>
        <BannerText>{username} 환영합니다</BannerText>
      </BannerContainer>
      <SearchContainer>
        <SearchTitle>📽 Find your movies!</SearchTitle>
        <SearchMovie />
      </SearchContainer>
    </Container>
  );
}
