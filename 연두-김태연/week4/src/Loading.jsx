import React from "react";
import styled from "styled-components";
import Spinner from "./assets/Eclipse@1x-1.0s-200px-200px (1).gif";

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const LoadingImage = styled.img`
  width: 50%;
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingImage src={Spinner} alt="로딩" />
    </LoadingContainer>
  );
};

export default Loading;