import React from "react";
import {
  DetailContainer,
  DetailWrapper,
  DetailInfo,
  DetailTitle,
} from "./MovieDetailPage";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MainButton = styled(Link)`
  color: white;
  font-size: 30px;
  text-decoration: none;
`;
const NotFoundPage = () => {
  return (
    <DetailContainer>
      <DetailWrapper>
        <DetailInfo alignItems="center">
          <DetailTitle size="40px">Oops!</DetailTitle>
          <DetailTitle size="20px">
            예상치 못한 에러가 발생했습니다;
          </DetailTitle>
          <DetailTitle size="20px" font='italic'>
            Not Found
          </DetailTitle>
          <MainButton to="/">메인으로 이동하기</MainButton>
        </DetailInfo>
      </DetailWrapper>
    </DetailContainer>
  );
};

export default NotFoundPage;
