import React from "react";
import styled from "styled-components";
import Spinner from "./assets/Eclipse@1x-1.0s-200px-200px (1).gif";

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color : #fff;
`;

const LoadingImage = styled.img`
  width: 10%;
`;


const Loading2 = () => {
  return (
    <LoadingContainer>
      <LoadingImage src={Spinner} alt="로딩" />
      <p>데이터를 불러오고있습니다.</p>
    </LoadingContainer>
  );
};

export default Loading2;