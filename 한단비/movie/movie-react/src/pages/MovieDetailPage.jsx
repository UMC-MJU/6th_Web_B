import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { IMG_BASE_URL } from "../components/Movie";
import styled from "styled-components";

const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.05; // 배경 이미지의 투명도 조절
`;

export const DetailContainer = styled.div`
  width: 100%;
  height: calc(100vh - 64px);
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1f2141;
  position: relative;
`;

export const DetailWrapper = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  z-index: 1;
`;

export const DetailInfo = styled.div`
  widht: 60%;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.alignItems || "initial"};
  gap: 30px;
`;
export const DetailTitle = styled.h1`
  color: white;
  font-size: ${(props) => props.size || "32px"};
  font-weight: 500;
`;

export default function MovieDetailPage() {
  const { title } = useParams(); // url로 넘겨준 영화 이름
  const { state } = useLocation(); // navigate hook을 통해 넘겨준 props
  const roundedScore = Math.round(state.vote_average);
  console.log(title);
  console.log(state);

  return (
    <DetailContainer>
      <BackgroundImage bgImage={IMG_BASE_URL + state.poster_path} />
      <DetailWrapper>
        <img
          style={{ width: "300px", height: "450px" }}
          src={IMG_BASE_URL + state.poster_path}
          alt={title}
        />
        <DetailInfo>
          <DetailTitle>{title}</DetailTitle>
          <DetailTitle size="20px">평점 {"★".repeat(roundedScore)}</DetailTitle>
          <DetailTitle size="20px">개봉일 {state.release_date}</DetailTitle>
          <DetailTitle size="20px">줄거리</DetailTitle>
          {state.overview ? (
            <DetailTitle size="16px">{state.overview}</DetailTitle>
          ) : (
            <DetailTitle size="16px">
              TMDB에서 제공하는 API에 상세 줄거리 정보가 없습니다.
            </DetailTitle>
          )}
        </DetailInfo>
      </DetailWrapper>
    </DetailContainer>
  );
}
